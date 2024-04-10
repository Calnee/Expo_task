import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  TextInput,
} from "react-native";
import { Border, Color, Padding } from "../../GlobalStyles";

const SearchComponent = ({ onSearch }) => {
  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.input}
        placeholder="Enter food type or keyword"
        placeholderTextColor={Color.wHITE}
        //value={query}
        onChangeText={(text) => onSearch(text)}
      />
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/searchIcon.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent:'center',
    marginBottom:20
  },
  input: {
    // flex:1,
    width: "85%",
    alignSelf: "center",
    margin: 10,
    padding:Padding.p_5xs,
    paddingLeft: Padding.p_xl,
   //height: "110%",
    borderWidth: Border.br_12xs_5,
    borderRadius: 20,
    borderColor: Color.colorGray_200,
    backgroundColor: Color.gray200,
    color:Color.wHITE,
    position: "absolute",
  },
  icon: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 5,
    left: 140,
  },
});

export { SearchComponent };
