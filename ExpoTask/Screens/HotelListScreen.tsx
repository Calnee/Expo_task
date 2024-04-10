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

export const RestaurantList = [
  {
    id: "1",
    restaurantName: "Mc Donalds",
    imageUri: require("../assets/images/Mc.png"),
    Address: "1234 45th AVE SE, Seattle, WA",
  },
  {
    id: "2",
    restaurantName: "BurgerKing",
    imageUri: require("../assets/images/burgerking.png"),
    Address: "1234 45th AVE SE, Seattle, WA",
  },
  {
    id: "3",
    restaurantName: "Wendy's",
    imageUri: require("../assets/images/wendys.png"),
    Address: "1234 45th AVE SE, Seattle, WA",
  },
  {
    id: "4",
    restaurantName: "Jack in the box",
    imageUri: require("../assets/images/jack.png"),
    Address: "1234 45th AVE SE, Seattle, WA",
  },
];

const HotelListScreen = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleHomePress = () => {
    navigation.navigate('HomeScreen');
    // navigation.navigate('Main');
};

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Podkova: require("../assets/fonts/Podkova-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

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
        {RestaurantList.map((restaurant) => (
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
    </ScrollView>

  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  main_container: {
    width: width,
    height: height,
    //marginTop: 20,
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
