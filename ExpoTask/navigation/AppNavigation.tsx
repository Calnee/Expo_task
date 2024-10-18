import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { HotelListScreen } from "../Screens/HotelListScreen";
import { SampleScreenOne } from "../Screens/SampleScreenOne";
import { SampleScreenTwo } from "../Screens/SampleScreenTwo";

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

<StackNav.Screen
        name="SampleScreenOne"
        component={SampleScreenOne}
        options={{
          headerShown: false,
        }}
      />

<StackNav.Screen
        name="SampleScreenTwo"
        component={SampleScreenTwo}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
    
  );
}
