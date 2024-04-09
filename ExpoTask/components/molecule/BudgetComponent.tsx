import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Color } from "../../GlobalStyles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";

export const budget = {
  id: "1",
  amount: 114,
};

const BudgetComponent = () => {
  const [values, setValues] = useState([0, budget.amount]);

  const multiSliderValuesChange = (values) => {
    setValues(values);
  };

  return (
    <TouchableOpacity>
      <View style={styles.mainView}>
        {/* <Text style={styles.text}>{text}</Text> */}

        <View style={styles.sliderContainer}>
          <Text style={styles.amountText}>
            ${values[0]} - ${values[1]}
          </Text>
          <View style={styles.sliderStyle}>
          <MultiSlider
            values={[values[0], values[1]]}
            //sliderLength={250}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={budget.amount}
            step={1}
            selectedStyle={{
              backgroundColor: Color.teal,
            }}
            unselectedStyle={{
              backgroundColor: Color.black,
            }}
            markerStyle={{
              backgroundColor: Color.neonBlue,
              height:16,
              width:16,
              marginTop:8
            }}
            // markerOffsetX={0}
            // markerOffsetY={0}
            trackStyle={{
              height: 8, // Adjust the height as per your preference
            }}
          />
          </View>
         
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Color.gray200,
    borderColor: Color.colorGray_200,
    width: "80%",
    height: 105,
    marginBottom: 90,
  },
  sliderContainer: {
    alignItems: "center",
   // gap: 10,
  },
  sliderStyle: {
    width: "100%",
    height: 2,
    alignItems: "center",
  },
  amountText: {
    fontSize: 40,
    marginTop: 5,
    fontWeight: "400",
    color: Color.wHITE,
  },
});

export { BudgetComponent };
