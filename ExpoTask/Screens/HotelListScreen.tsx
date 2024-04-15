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
import { Border, Color, FontFamily, Padding } from "../GlobalStyles";
import * as Font from "expo-font";
import { RestaurantView } from "../components/atom/RestaurantComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import * as Location from 'expo-location'; // Import Location module from Expo
 
const HotelListScreen = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // State to store user's current location
 
  const handleHomePress = () => {
    navigation.navigate('HomeScreen');
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
 
    // Function to fetch restaurant data from Yelp API
    const fetchData = async () => {
      try {
        const term = 'restaurants';
        const categories = 'Japanese';
        const minValue = 1; 
        const maxValue = 2; 
        const limit = 20;
        const sort_by = 'best_match';
        const headers = {
          Authorization: "Bearer o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx",
          Accept: "application/json",
        };
 
        // Fetch user's current location if not already available
        if (!userLocation) {
          await fetchUserLocation();
        }
 
        // Proceed with fetching restaurant data if user's location is available
        if (userLocation) {
          console.log('userlocation',userLocation)
          const response = await axios.get(`https://api.yelp.com/v3/businesses/search?`, {
            headers: headers,
            params: {
              term: term,
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              categories: categories,
              price: `${minValue},${maxValue}`,
              limit: limit,
              sort_by: sort_by,
            },
          });
 
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
    };
 
    // Function to load fonts
    const loadFonts = async () => {
      await Font.loadAsync({
        Podkova: require("../assets/fonts/Podkova-Regular.ttf"),
      });
      setFontLoaded(true);
    };
 
    fetchData(); // Fetch restaurant data
    loadFonts(); // Load fonts
 
  }, [userLocation]); // Fetch data whenever userLocation changes
 
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
    <SafeAreaView style={styles.main_container}>
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
            Address={restaurant.Address}
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
    </SafeAreaView>
  );
};
 
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  main_container: {
    width: width,
    height: height,
    backgroundColor: Color.bGNavy900,
  },
  main_heading: {
    color: Color.wHITE,
    fontSize: 32,
    marginLeft: 180,
    fontFamily: FontFamily.podkovaSemiBold,
    marginBottom: 10,
  },
  first_row: {
    flexDirection: "row",
    marginTop: 10,
  },
  second_row: {
    paddingHorizontal: 30,
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
});
 
export { HotelListScreen };
