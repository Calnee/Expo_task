import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { HotelListScreen } from "../Screens/HotelListScreen";
import FoodFinderRestaurantList from "../yelpEx";

const StackNav = createNativeStackNavigator();
export function HomeStackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="FoodFinderRestaurantList"
        component={FoodFinderRestaurantList}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
