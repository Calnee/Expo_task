import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Color, FontFamily } from "../../../Expo_task/ExpoTask/GlobalStyles";
//import FoodFinderHeaderContainer from "../budget/FoodFinderHeaderContainer";
import { useRoute } from "@react-navigation/native";
// import Icon from "../../Expo_task/ExpoTask/assets/images/backArrow.png";
import Geolocation from '@react-native-community/geolocation';
 
const FoodFinderRestaurantList = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const route = useRoute();
  const { minValue, maxValue, cuisineSelected } = route.params;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
 
  useEffect(() => {
    const clientId = "EUDVTEZ1CYOB3Q3KM2HJDPXAYF5ICML0A0WRDJDUVYDS5IUB";
    const clientSecret = "LW2WKSY4JTAWXH4FLANS1MDCADOTERKDHMYZHQK1E41BLKPP";
    // const cuisine = cuisineSelected;
    const cuisine = 'burger';
    const price = `${minValue},${maxValue}`; // Price range ($, $$)
    const headers = {
      Authorization: "fsq33uQCp2t7ZxG3v5BGb6gJcr99TFZlRkkqiz+gC3sd3Vs=",
      Accept: "application/json",
    };
 
    Geolocation.requestAuthorization();
 
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
 
        fetch(
          `https://api.foursquare.com/v3/places/search?client_id=${clientId}&client_secret=${clientSecret}&v=20220401&ll=${latitude},${longitude}&query=${cuisine}&price=${price}&limit=20`,
          {
            method: "GET",
            headers: headers,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(JSON.stringify(data));
            const restaurant = data.results.map((restaurant) => {
              const imageUrl = `${restaurant.categories[0].icon.prefix}bg_64${restaurant.categories[0].icon.suffix}`;
 
              return {
                fsq_id: restaurant.fsq_id,
                name: restaurant.name,
                image: imageUrl,
                address: restaurant.location.formatted_address,
                latitude: restaurant.geocodes.main.latitude,
                longitude: restaurant.geocodes.main.longitude,
              };
            });
            setRestaurants(restaurant);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
          });
      },
      error => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);
 
  const handleItemPress = (fsq_id, latitude, longitude) => {
    setSelectedItem(fsq_id);
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
 
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.item,
        selectedItem === item.fsq_id ? styles.selectedItem : null,
      ]}
      onPress={() => {
        if (item.latitude && item.longitude) {
          handleItemPress(item.fsq_id, item.latitude, item.longitude);
        } else {
          console.error("Geocode data not available for this item:", item);
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>

    </TouchableOpacity>
  );
 
  return (
    <View style={styles.parent}>
      {/* <FoodFinderHeaderContainer
        showBackArrow={true}
        text={"Food Finder"}
        onBackPress={() => navigation.goBack()}
      /> */}
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#FFFFFF"
        />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.fsq_id}
        />
      )}
    </View>
  );
};
 
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.bGNavy900,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#898989",
  },
  selectedItem: {
    borderColor: "#2FFEE0",
    borderWidth: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: FontFamily.sourceSansPro,
  },
  address: {
    color: "#FFFFFF",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    fontFamily: FontFamily.sourceSansPro,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
 
export default FoodFinderRestaurantList;