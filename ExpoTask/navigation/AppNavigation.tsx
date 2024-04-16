import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { HotelListScreen } from "../Screens/HotelListScreen";

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
        name="HotelListScreen"
        component={HotelListScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
