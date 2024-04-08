import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "../ExpoTask/Screens/HomeScreen";
import { HotelListScreen } from "../ExpoTask/Screens/HotelListScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();
export default function App() {
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
