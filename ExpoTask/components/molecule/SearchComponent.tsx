import React, { useEffect, useState } from "react";
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

type InputProps = {
  editable?: boolean;
  value?: string;
  hidden?: boolean;
  setter?: (value: string) => void;
  onSearch?: (value: string) => void;
  onPress?: () => void;
};

const SearchComponent = ({
  editable,
  value,
  hidden = false,
  setter,
  onSearch,
  onPress,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
 const [localValue, setLocalValue] = useState(value); // Add a local state for the text input

 useEffect(() => {
    setLocalValue(value); // Update local state when the value prop changes
 }, [value]);

 const onChangeText = (value: string) => {
    setLocalValue(value); // Update local state when text changes
    if (setter) {
      setter(value);
    }
    if (onSearch) {
      onSearch(value);
    }
 };

 const clearText = () => {
    setLocalValue(""); // Clear the local state
    if (setter) {
      setter(""); // Also clear the parent component's state if setter is provided
    }
    if (onSearch) {
      onSearch(""); // Pass an empty string to trigger the resetting of search results
    }
 };

  return (
    // <TouchableOpacity onPress={onPress}>
    <View style={styles.searchView}>
      <TextInput
        editable={editable}
        style={styles.input}
        placeholder="Enter food type or keyword"
        placeholderTextColor={Color.wHITE}
        value={localValue} // Use local state for the text input
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {localValue ? (
        <TouchableOpacity onPress={clearText}>
          <Image
            source={require("../../assets/images/close.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/searchIcon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: "85%",
    alignSelf: "center",
    margin: 10,
    padding: Padding.p_5xs,
    paddingLeft: Padding.p_xl,
    borderWidth: Border.br_12xs_5,
    borderRadius: 20,
    borderColor: Color.colorGray_200,
    backgroundColor: Color.gray200,
    color: Color.wHITE,
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
  closeIcon: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 5,
    left:140
  },
});

export { SearchComponent };
