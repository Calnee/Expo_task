import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Color } from "../../GlobalStyles";
import { useState } from "react";

export const feeds = [
  {
    id: "1",
    foodType: "FASTFOOD",
  },
  {
    id: "2",
    foodType: "TERIYAKI",
  },
  {
    id: "3",
    foodType: "TACOS",
  },
  {
    id: "6",
    foodType: "ITALIAN",
  },
  {
    id: "4",
    foodType: "BURGER",
  },
  {
    id: "5",
    foodType: "BBQ",
  },
  {
    id: "7",
    foodType: "CURRY",
  },
];

type ItemProps = {
  foodType: string;
};

const Item = ({ foodType }: ItemProps) => {
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

const FoodType = () => {
  const SeparatorComponent = () => <View style={styles.separator} />;
  return (
    <View style={styles.listContainer}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={feeds}
        renderItem={({ item }) => <Item foodType={item.foodType} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparatorComponent}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Color.black,
    borderColor: Color.colorGray_200,
    width: "auto",
    marginBottom: 10,
  },
  text: {
    color: Color.wHITE,
    alignSelf: "center",
    padding: 10,
    fontSize: 16,
    fontWeight:'600'
    //marginTop:8
  },
  listContainer: {
    marginLeft: 19,
  },
  separator: {
    width: 10, 
    backgroundColor: "transparent",
  },
});

export { FoodType };
