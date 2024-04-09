import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Color } from "../../GlobalStyles";

const DeSelectButton = ({text}) => {
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
    backgroundColor: Color.gray200,
    borderColor: Color.colorGray_200,
    width: "80%",
   // height: "22%",
  },
  text: {
    color: Color.wHITE,
    alignSelf: "center",
    padding:8
    //marginTop:8
  },
});

export { DeSelectButton };
