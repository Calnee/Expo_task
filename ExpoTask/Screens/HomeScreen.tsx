import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontFamily } from "../GlobalStyles";
import * as Svg from "react-native-svg";
import { SearchComponent } from "../components/molecule/SearchComponent";
import { SelectButton } from "../components/atom/SelectButton";
import { DeSelectButton } from "../components/atom/DeSelectButton";
import { BudgetComponent } from "../components/molecule/BudgetComponent";
import { FoodType } from "../components/atom/FoodType";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/images/KnifenFork.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.titleText}>Food Finder</Text>
        <Text style={styles.text}>What kind of food?</Text>
        <SearchComponent />
        <FoodType />
        <Text style={styles.text}>How much to spend?</Text>
        <Text style={styles.subText}>$114.1k left</Text>

        <BudgetComponent text={undefined} />
        <View style={styles.buttonContainer}>
        <SelectButton text='SEARCH' />
        <DeSelectButton text='CANCEL'/>
        </View>
      </View>
    </ScrollView>
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
    height: 56,
    width: 56,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 64,
  },
  icon: {
    width: 25,
    height: 29,
    //justifyContent: "center",
    alignSelf: "center",
  },
  titleText: {
    color: Color.wHITE,
    fontSize: 40,
    //justifyContent:'center',
    marginTop: 20,
    alignSelf: "center",
    fontFamily:FontFamily.podkovaBold,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  text: {
    color: Color.blueGreen,
    marginTop: 20,
    fontSize: 20,
    alignSelf: "center",
    fontFamily:FontFamily.podkovaRegular
  },
  subText: {
    color: Color.wHITE,
    alignSelf: "center",
    fontSize: 14,
    //fontFamily:FontFamily.podkovaRegular
  },
  buttonContainer:{
    flexDirection:'column',
    gap:20,
  }
});

export { HomeScreen };
