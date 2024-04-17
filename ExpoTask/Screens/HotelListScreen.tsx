import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Animated,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Border, Color, FontFamily } from "../GlobalStyles";
import * as Font from "expo-font";
import MarqueeText from "react-native-marquee";
import * as Location from "expo-location";

const HotelListScreen = ({ navigation, route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const [userLocation, setUserLocation] = useState(null); // State to store user's current location
  const { minValue, maxValue, cuisineSelected } = route.params;

  const handleHomePress = () => {
    navigation.navigate("HomeScreen");
    // navigation.navigate('Main');
  };

  useEffect(() => {
    // Function to fetch user's current location
    const fetchUserLocation = async () => {
      try {
        // Request permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }
        // Get user's current location
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords); // Set user's current location
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    // Fetch user's current location if not already available
    if (!userLocation) {
      fetchUserLocation();
    }

    async function getHotelList() {
      try {
        // Proceed with fetching restaurant data if user's location is available
        if (userLocation) {
          const term = "restaurants";
          const latitude = userLocation.latitude;
          const longitude = userLocation.longitude;
          const limit = 20;
          const sort_by = "best_match";
          const headers = {
            Authorization:
              "Bearer o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx",
            Accept: "application/json",
          };

          let priceRange;
          if (minValue >= 0 && maxValue <= 10) {
            priceRange = "1";
          } else if (minValue >= 0 && maxValue <= 30) {
            priceRange = "1,2";
          } else if (minValue >= 0 && maxValue <= 100) {
            priceRange = "1,2,3";
          } else if (minValue >= 0 && maxValue >= 100) {
            priceRange = "1,2,3,4";
          } else {
            priceRange = "Invalid range";
          }

          console.log("category", cuisineSelected);
          fetch(
            `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&categories=${cuisineSelected}&limit=${limit}&sort_by=${sort_by}&price=${priceRange}`,
            {
              method: "GET",
              headers: headers,
            }
          )
            .then((response) => response.json())
            .then((data) => {
              //console.log(JSON.stringify(data));
              const restaurantData = data.businesses.map((business) => ({
                id: business.id,
                restaurantName: business.name,
                imageUri: { uri: business.image_url },
                address: business.location.address1,
                rating: business.rating,
                price: business.price,
                menuUrl: business.attributes?.menu_url || null,
              }));
              setRestaurants(restaurantData);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    async function loadFonts() {
      await Font.loadAsync({
        Podkova: require("../assets/fonts/Podkova-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    getHotelList();// Fetch restaurant data
    loadFonts(); 
  }, [userLocation, minValue, maxValue, cuisineSelected]);

  const handleSelectRestaurant = (restaurantId) => {
    setSelectedRestaurant(restaurantId);
  };

  if (!fontLoaded) {
    return null;
  }

  const getPriceLabel = (price) => {
    switch (price) {
      case "$":
        return ["$", "Low"];
      case "$$":
        return ["$$", "Medium"];
      case "$$$":
        return ["$$$", "High"];
      case "$$$$":
        return ["$$$$", "High"];
      default:
        return ["", ""];
    }
  };

  const renderItem = ({
    item,
  }: {
    item: {
      restaurantName: string;
      imageUri: any;
      address: string;
      price: string;
      menuUrl: any;
      onPress: () => void;
      isSelected: boolean;
    };
  }) => {
    const {
      restaurantName,
      imageUri,
      address,
      onPress,
      isSelected,
      menuUrl,
      price,
    } = item;

    const handleWebIconPress = () => {
      if (menuUrl) {
        Linking.openURL(menuUrl);
      }
    };
    // console.log(menuUrl);
    //console.log(typeof price);
    const [symbol, label] = getPriceLabel(price);

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.restaurant_container,
          isSelected ? styles.selected : null,
        ]}
      >
        <View style={styles.logo_container}>
          <Image
            source={imageUri}
            style={styles.image_style}
            resizeMode="contain"
          />
        </View>
        <View style={styles.text_container_main}>
          {/* {restaurantName.length > 15 ? (
            <MarqueeText
              style={styles.restaurantName}
              speed={1}
              marqueeOnStart={true}
              loop={true}
              delay={1000}
            >
              {restaurantName}
            </MarqueeText>
          ) : (
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          )} */}

          <MarqueeText
            style={styles.restaurantName}
            speed={1}
            marqueeOnStart={true}
            loop={true}
            delay={1000}
          >
            {restaurantName.length > 24
              ? `${restaurantName}    ${restaurantName}`
              : restaurantName}
          </MarqueeText>
          <Text style={styles.address_font}>{address}</Text>
          <Text style={styles.price}>
            {" "}
            {symbol} {label}
          </Text>
        </View>
        {menuUrl && (
          <TouchableOpacity
            onPress={handleWebIconPress}
            style={styles.webContainer}
          >
            <View>
              <Image
                source={require("../assets/images/website.png")}
                style={styles.webIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    // <SafeAreaView>
    <View style={styles.main_container}>
      <View style={styles.first_row}>
        <View>
          <TouchableOpacity onPress={handleHomePress}>
            <Image
              source={require("../assets/images/backArrow.png")}
              style={styles.back_image}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.main_heading}>Food Finder</Text>
        </View>
      </View>
      <View style={styles.second_row}>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: Color.bGNavy900,
  },
  first_row: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  second_row: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  back_image: {
    width: 32,
    height: 32,
    marginTop: 5,
    marginLeft: 10,
  },
  takeMeThereButton: {
    backgroundColor: Color.teal,
    marginTop: 150,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: "center",
    width: 350,
    height: 45,
    borderColor: Color.neonBlue,
    borderWidth: 2,
  },
  takeMeThereText: {
    color: Color.neonBlue,
    fontSize: 16,
  },
  main_heading: {
    color: Color.wHITE,
    fontSize: 32,
    marginLeft: 180,
    fontFamily: FontFamily.podkovaSemiBold,
    marginBottom: 10,
  },
  //Rstaurant component styles
  restaurant_container: {
    width: "100%",
    height: 100,
    backgroundColor: Color.black,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.wHITE,
  },
  logo_container: {
    width: "23%",
    paddingLeft: 10,
    alignSelf: "center",
  },
  text_container_main: {
    width: "60%",
    height: 50,
    paddingLeft: 0,
    marginLeft: 0,
    alignSelf: "center",
  },
  restaurantName: {
    color: "white",
    fontSize: 20,
    fontFamily: "Source Sans Pro",
    fontWeight: "400",
    paddingLeft: 0,
    marginLeft: 0,
  },
  image_style: {
    width: 50,
    height: 50,
  },
  address_font: {
    color: "white",
    fontSize: 12,
    fontFamily: "Source Sans Pro",
  },
  price: {
    fontSize: 12,
    color: Color.wHITE,
  },
  selected: {
    borderColor: Color.neonBlue,
    borderWidth: 2,
  },
  webContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  webIcon: {
    width: 25,
    height: 25,
  },
});

export { HotelListScreen };
