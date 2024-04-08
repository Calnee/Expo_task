import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";
import * as Svg from "react-native-svg";
import { SearchComponent } from "../components/molecule/SearchComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/images/restaurant.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.titleText}>Food Finder</Text>
        <Text style={styles.text}>What kind of food?</Text>
        <SearchComponent />
        <Text style={styles.text}>How much to spend?</Text>
        <Text style={styles.subText}>$114.1k left</Text>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  mainContainer: {
    // flex:1,
    width,
    height,
    backgroundColor: Color.bGNavy900,
  },
  iconContainer: {
    backgroundColor: Color.blueGreen,
    borderWidth: 1,
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 80,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
  },
  titleText: {
    color: Color.wHITE,
    fontSize: 40,
    //justifyContent:'center',
    marginTop: 20,
    alignSelf: "center",
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  text: {
    color: Color.blueGreen,
    marginTop: 60,
    fontSize: 20,
    alignSelf: "center",
  },
  subText: {
    color: Color.wHITE,
    alignSelf: "center",
  },
});

export { HomeScreen };
