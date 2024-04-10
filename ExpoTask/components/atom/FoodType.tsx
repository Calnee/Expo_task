import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Border, Color, FontSize, Padding } from "../../GlobalStyles";
import { useState } from "react";

type foodType = {
  foodType: string;
  onPress?: () => void;
};
const FoodType = ({ foodType, onPress }: foodType) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.mainView,
          { backgroundColor: selected ? Color.blueGreen : Color.black },
        ]}
      >
        <Text
          style={[styles.text, { color: selected ? Color.black : Color.wHITE }]}
        >
          {foodType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignSelf: "center",
    borderWidth: Border.br_12xs_5,
    borderRadius: 20,
    backgroundColor: Color.black,
    borderColor: Color.colorGray_200,
    width: "auto",
    marginBottom: 10,
  },
  text: {
    color: Color.wHITE,
    alignSelf: "center",
    padding: Padding.p_3xs,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    //marginTop:8
  },
  listContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  separator: {
    width: 10,
    backgroundColor: "transparent",
  },
});

export { FoodType };
