import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Border, Color, FontFamily } from "../GlobalStyles";
import * as Font from "expo-font";
import { RestaurantView } from "../components/atom/RestaurantComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import * as Location from 'expo-location';

const HotelListScreen = ({ navigation, route }) => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const [userLocation, setUserLocation] = useState(null); // State to store user's current location
  const { minValue, maxValue, foodType } = route.params;

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
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        // Get user's current location
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords); // Set user's current location
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    // Fetch user's current location if not already available
    if (!userLocation) {
      fetchUserLocation();
    }

    async function fetchData() {
      try {
        // Proceed with fetching restaurant data if user's location is available
        if (userLocation) {
          const term = "restaurants";
          const latitude = userLocation.latitude;
          const longitude = userLocation.longitude;
          const limit = 10;
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
          } else if (minValue >= 0 && maxValue > 100) {
            priceRange = "1,2,3,4";
          } else if (minValue > 10 && maxValue <= 30) {
            priceRange = "2";
          } else if (minValue > 10 && maxValue <= 100) {
            priceRange = "2,3";
          } else if (minValue > 10 && maxValue > 100) {
            priceRange = "2,3,4";
          } else if (minValue > 30 && maxValue <= 100) {
            priceRange = "3";
          } else if (minValue > 30 && maxValue > 100) {
            priceRange = "3,4";
          } else if (minValue > 100) {
            priceRange = "4";
          } else {
            priceRange = "Invalid range";
          }

          console.log("category",foodType);
          const response = await axios.get(
            `https://api.yelp.com/v3/businesses/search?`,
            {
              headers: headers,
              params: {
                term: term,
                latitude: latitude,
                longitude: longitude,
                categories: foodType,
                price: priceRange,
                limit: limit,
                sort_by: sort_by,
              },
            }
          );

          const restaurantData = response.data.businesses.map((business) => ({
            id: business.id,
            restaurantName: business.name,
            imageUri: { uri: business.image_url },
            address: business.location.address1,
          }));

          setRestaurants(restaurantData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    //load fonts
    async function loadFonts() {
      await Font.loadAsync({
        Podkova: require("../assets/fonts/Podkova-Regular.ttf"),
      });
      setFontLoaded(true);
    };

    fetchData(); // Fetch restaurant data
    loadFonts(); // Load fonts

  }, [userLocation, minValue, maxValue, foodType]);

  const handleSelectRestaurant = (restaurantId) => {
    setSelectedRestaurant(restaurantId);
  };

  const handleTakeMeThere = () => {
    console.log("Take me there button pressed");
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.main_container}>
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
        {restaurants.map((restaurant) => (
          <RestaurantView
            key={restaurant.id}
            restaurantName={restaurant.restaurantName}
            imageUri={restaurant.imageUri}
            Address={restaurant.address}
            onPress={() => handleSelectRestaurant(restaurant.id)}
            isSelected={selectedRestaurant === restaurant.id}
          />
        ))}
      </View>
      {selectedRestaurant && (
        <TouchableOpacity
          onPress={handleTakeMeThere}
          style={styles.takeMeThereButton}
        >
          <Text style={styles.takeMeThereText}>TAKE ME THERE</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
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
});

export { HotelListScreen };
