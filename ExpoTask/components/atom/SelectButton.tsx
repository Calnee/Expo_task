import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Color } from "../../GlobalStyles";

const SelectButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    backgroundColor: Color.teal,
    borderColor: Color.blueGreen,
    width: "80%",
  },
  text: {
    color: Color.blueGreen,
    alignSelf: "center",
    padding:8
   // marginTop:8
  },
});

export { SelectButton };
