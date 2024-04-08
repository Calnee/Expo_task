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
import { Color } from "../../GlobalStyles";

const SearchComponent = () => {
  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.input}
        placeholder="Enter food types or keyword"
        placeholderTextColor={Color.wHITE}
        //value={query}
        //onChangeText={(text) => setQuery(text)}
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
    justifyContent:'center'
  },
  input: {
    // flex:1,
    width: "85%",
    alignSelf: "center",
    margin: 10,
    paddingLeft: 20,
    height: "110%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Color.colorGray_200,
    backgroundColor: Color.gray200,
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
