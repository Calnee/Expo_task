import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Color } from "../../GlobalStyles";

const SelectButton = ({text}) => {
  return (
    <TouchableOpacity>
      <View style={styles.mainView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Color.lightGreyGreen,
    borderColor: Color.blueGreen,
    width: "80%",
    //height: "22%",
  },
  text: {
    color: Color.blueGreen,
    alignSelf: "center",
    padding:8
   // marginTop:8
  },
});

export { SelectButton };
