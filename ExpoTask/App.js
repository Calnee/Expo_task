import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "../ExpoTask/Screens/HomeScreen";
import { HotelListScreen } from "../ExpoTask/Screens/HotelListScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const fetchFonts = async () => {
  try {
      await Font.loadAsync({
          'Source Sans Pro': require('./assets/fonts/SourceSans3-Regular.ttf'),
          'Source Sans Pro Bold': require('./assets/fonts/SourceSans3-Bold.ttf'),
          'Podkova-Bold': require('./assets/fonts/Podkova-Bold.ttf'),
          'Podkova-SemiBold': require('./assets/fonts/Podkova-SemiBold.ttf'),
          'Podkova-Medium':require('./assets/fonts/Podkova-Medium.ttf'),
          'Podkova-Regular':require('./assets/fonts/Podkova-Regular.ttf')
      });
  } catch(error) {
      console.error(error);
  }
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
}, []);

if (!fontLoaded) {
  return <View></View>;
}
  return (
    <SafeAreaView>
      {/* <View style={styles.container}> */}
        {/* <Text>Open up App.js to start on your app!</Text> */}
        {/* <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Entry"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} /> */}
            {/* <Stack.Screen name="HotelList" component={HotelListScreen} />              */}
          {/* </Stack.Navigator>
        </NavigationContainer> */}
        <HomeScreen />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
