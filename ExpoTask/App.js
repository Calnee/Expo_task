import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStackNavigation } from "./navigation/AppNavigation";
import { ToastProvider } from 'react-native-toast-notifications'
import { HotelListScreen } from "./Screens/HotelListScreen";
import { SampleScreenOne } from "./Screens/SampleScreenOne";

const Stack = createStackNavigator();

const fetchFonts = async () => {
  try {
    await Font.loadAsync({
      "Source Sans Pro": require("./assets/fonts/SourceSans3-Regular.ttf"),
      "Source Sans Pro Bold": require("./assets/fonts/SourceSans3-Bold.ttf"),
      "Podkova-Bold": require("./assets/fonts/Podkova-Bold.ttf"),
      "Podkova-SemiBold": require("./assets/fonts/Podkova-SemiBold.ttf"),
      "Podkova-Medium": require("./assets/fonts/Podkova-Medium.ttf"),
      "Podkova-Regular": require("./assets/fonts/Podkova-Regular.ttf"),
    });
  } catch (error) {
    console.error(error);
  }
};

const linking = {
  prefixes: ['http://localhost:8081'], // Update to your local server or production URL
  config: {
    screens: {
      HomeScreen: 'HomeScreen',           // Default screen
      HotelListScreen: 'HotelListSCreen', // Add the screens you need here
      SampleScreenOne:'SampleScreenOne'
    },
  },
};

const app = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <View></View>;
  }

  return (
    <ToastProvider>
    <NavigationContainer linking={linking}>
      <HomeStackNavigation />
    </NavigationContainer>
     </ToastProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default app;
