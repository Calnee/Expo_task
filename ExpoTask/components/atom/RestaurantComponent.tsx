import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { Border, Color, Padding } from "../../GlobalStyles";

const RestaurantView = ({
  restaurantName,
  imageUri,
  Address,
  onPress,
  isSelected,
}: {
  restaurantName: string;
  imageUri: any;
  Address: string;
  onPress: () => void;
  isSelected: boolean;
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Source Sans Pro": require("../../assets/fonts/SourceSans3-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[isSelected ? styles.selected : null]}
    >
      <SafeAreaView>
        <View style={styles.main_container}>
          <View style={styles.logo_container}>
            <Image
              source={imageUri}
              style={styles.image_style}
              resizeMode="contain"
            />
          </View>
          <View style={styles.text_container_main}>
            <Text style={styles.font_color}>{restaurantName}</Text>
            <Text style={styles.address_font}>{Address}</Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main_container: {
    width: "100%",
    height: 80,
    backgroundColor: Color.black,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.wHITE,
  },
  logo_container: {
    width: "23%",
    paddingLeft: 10,
  },
  text_container_main: {
    width: 150,
    height: 50,
    paddingLeft: 0,
    marginLeft: 0,
  },
  font_color: {
    color: "white",
    fontSize: 20,
    fontFamily: "Source Sans Pro",
    fontWeight: "400",
    paddingLeft: 0,
    marginLeft: 0,
  },
  image_style: {
    width: 50,
    height: 40,
  },
  address_font: {
    color: "white",
    fontSize: 12,
    fontFamily: "Source Sans Pro",
  },
  selected: {
    borderColor: Color.neonBlue,
    borderWidth: 2,
  },
});

export { RestaurantView };
