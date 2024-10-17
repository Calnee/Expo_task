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
import { ToastProvider, useToast } from "react-native-toast-notifications";
import { SafeAreaView } from "react-native-safe-area-context";

const HotelListScreen = ({ navigation, route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const [userLocation, setUserLocation] = useState(null); // State to store user's current location
  const { minValue, maxValue, cuisineSelected, long, lat } = route.params;
  // const toast = useToast();

  const handleHomePress = () => {
    navigation.navigate("HomeScreen");
    // navigation.navigate('Main');
  };

  useEffect(() => {
    async function getHotelList() {
      try {
        // Proceed with fetching restaurant data if user's location is available
        console.log("lat--", lat);
        if (lat && long) {
          const term = "Food";
          const latitude = lat;
          const longitude = long;
          const limit = 50;
          const sort_by = "best_match";
          const radius = 8100;
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
            `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&categories=${cuisineSelected}&limit=${limit}&sort_by=${sort_by}&radius=${radius}&price=${priceRange}`,
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
        } else {
          // Display toast message if latitude or longitude is not provided
          console.log("Location permission not granted");
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

    getHotelList(); // Fetch restaurant data
    loadFonts();
  }, [lat, long, minValue, maxValue, cuisineSelected]);

  // const handleSelectRestaurant = (restaurantId) => {
  //   setSelectedRestaurant(restaurantId);
  // };

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

  const renderItem = ({ item }) => {
    const {
      restaurantName,
      imageUri,
      address,
      onPress,
      isSelected,
      menuUrl,
      price,
    } = item;

    const handleWebIconPress = (
      id: any,
      latitude: any,
      longitude: any,
      restaurantName: any
    ) => {
      if (menuUrl) {
        Linking.openURL(menuUrl);
      }
    };

    const truncateContactName = (name: string) => {
      if (name.length > 15) {
        return name.substring(0, 15) + "...";
      }
      return name;
    };
    // console.log(menuUrl);
    //console.log(typeof price);
    const [symbol, label] = getPriceLabel(price);

    return (
      <TouchableOpacity
        onPress={() => {
          console.log(JSON.stringify(item));
          if (item.latitude && item.longitude) {
            handleWebIconPress(
              item.id,
              item.latitude,
              item.longitude,
              item.restaurantName
            );
          } else {
            console.error("Geocode data not available for this item:", item);
          }
        }}
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
          <Text style={styles.restaurantName}>
            {truncateContactName(restaurantName)}
          </Text>
          <Text style={styles.address_font}>{address}</Text>
          <Text style={styles.price}> {symbol}</Text>
        </View>
        {menuUrl && (
          <>
            <TouchableOpacity
              onPress={() => handleWebIconPress(
                item.id,
                item.latitude,
                item.longitude,
                item.restaurantName
              )}
              style={styles.webContainer}
            >
              <Image
                source={require("../assets/images/KnifenFork.png")}
                style={styles.webIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.rightArrow}>
              <Image
                source={require("../assets/images/rightArrow.png")}
                style={styles.webIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        )}
        {!menuUrl && (
          <TouchableOpacity style={styles.noMenuUrl}>
            <Image
              source={require("../assets/images/rightArrow.png")}
              style={styles.webIcon} // or specify a different style
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: Color.bGNavy900,
    // position: "absolute",
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
    marginLeft: 160,
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
    width: "50%",
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
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 10,
    backgroundColor: Color.blueGreen,
    borderWidth: Border.br_12xs_5,
    borderRadius: 50,
    height: 35,
    width: 35,
    right: 20,
  },
  webIcon: {
    width: 20,
    height: 20,
  },
  rightArrow: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // position: "relative",
    right: -15,
  },
  noMenuUrl: {
    right: -60,
    justifyContent: "center",
  },
});

export { HotelListScreen };
