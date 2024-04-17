import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { SearchComponent } from "../components/molecule/SearchComponent";
import { SelectButton } from "../components/atom/SelectButton";
import { DeSelectButton } from "../components/atom/DeSelectButton";
import { FoodType } from "../components/atom/FoodType";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";
//foodType data
export const feeds = [
  {
    id: "1",
    foodType: "FASTFOOD",
  },
  {
    id: "2",
    foodType: "Sandwiches",
  },
  {
    id: "3",
    foodType: "Noodles",
  },
  {
    id: "4",
    foodType: "BURGER",
  },
  {
    id: "5",
    foodType: "Breakfast & Brunch",
  },
  {
    id: "6",
    foodType: "ITALIAN",
  },
  {
    id: "7",
    foodType: "THAI",
  },
  {
    id: "8",
    foodType: "CHINESE",
  },
  {
    id: "9",
    foodType: "Desserts",
  },
  {
    id: "10",
    foodType: "PIZZA",
  },
  {
    id: "11",
    foodType: "Ramen",
  },
  {
    id: "12",
    foodType: "Mediterranean",
  },
];
//Budget component data
export const budget = {
  id: "1",
  amount: 114,
};

const HomeScreen = ({ navigation }) => {
  const [values, setValues] = useState([0, budget.amount]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoodTypes, setFilteredFoodTypes] = useState(feeds);
  const defaultSelectedFoodType = "FASTFOOD";
  const [selectedFood, setSelectedFood] = useState(defaultSelectedFoodType);

  const [inputChanged, setInputChanged] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = feeds.filter((item) =>
      item.foodType.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodTypes(filtered);
  };

  const multiSliderValuesChange = (values) => {
    setValues(values);
  };

  const handleFoodTypePress = (selectedFood) => {
    setSelectedFood(selectedFood);
  };

  const handleHotelListPress = () => {
    // const minValue = values[0]; // Assign values here
    // const maxValue = values[1];
    // const cuisineSelected = selectedFood.toLowerCase();

    navigation.navigate("HotelListScreen", {
      minValue: values[0],
      maxValue: values[1],
      cuisineSelected: selectedFood.toLowerCase(),
    });
    // console.log("Food type:", cuisineSelected);
    // console.log("minValue:", minValue);
    // console.log("maxValue:", maxValue);
  };

  const SeparatorComponent = () => <View style={styles.separator} />;
  const ITEM_WIDTH_PERCENTAGE = 0.3;
  const windowWidth = Dimensions.get("window").width;
  const ITEM_WIDTH = windowWidth * ITEM_WIDTH_PERCENTAGE;

  return (
    <ScrollView>
      <View style={styles.parent}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/images/KnifenFork.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.titleText}>Food Finder</Text>
        <Text style={styles.textHome}>What kind of food?</Text>
        <SearchComponent
          onSearch={handleSearch}
          hidden={false}
          value={searchQuery}
          setter={(val) => {
            setInputChanged(true);
            setSearchQuery(val);
          }}
        />

        {/* food Types */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filteredFoodTypes}
          renderItem={({ item }) => (
            <FoodType
              foodType={item.foodType}
              defaultSelected={defaultSelectedFoodType === item.foodType}
              onPress={handleFoodTypePress}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={SeparatorComponent}
          contentContainerStyle={[
            styles.listContainer,
            filteredFoodTypes.length <= 2
              ? { width: Dimensions.get("window").width }
              : { width: ITEM_WIDTH * filteredFoodTypes.length },
            // styles.listContainer,
            // { width: filteredFoodTypes.length * 100 }
          ]}
        />

        <Text style={styles.budgetText}>How much to spend?</Text>
        <Text style={styles.subText}>${budget.amount} left</Text>

        {/* BudgetComponent */}
        <TouchableOpacity>
          <View style={styles.budgetWrapper}>
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
                  height: 16,
                  width: 16,
                  marginTop: 8,
                }}
                // markerOffsetX={0}
                // markerOffsetY={0}
                trackStyle={{
                  height: 8, // Adjust the height as per your preference
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <SelectButton text="SEARCH" onPress={handleHotelListPress} />
          <DeSelectButton text="CANCEL" onPress={undefined} />
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  parent: {
    width,
    height,
    backgroundColor: Color.bGNavy900,
    //marginTop:44
  },
  iconContainer: {
    backgroundColor: Color.blueGreen,
    borderWidth: Border.br_12xs_5,
    borderRadius: 50,
    height: 56,
    width: 56,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 64,
  },
  icon: {
    width: 25,
    height: 29,
    alignSelf: "center",
  },
  titleText: {
    color: Color.wHITE,
    fontSize: 40,
    marginTop: 20,
    alignSelf: "center",
    fontFamily: FontFamily.podkovaBold,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  textHome: {
    color: Color.blueGreen,
    marginTop: 20,
    fontSize: FontSize.size_xl,
    alignSelf: "center",
    fontFamily: FontFamily.podkovaSemiBold,
  },
  budgetText: {
    color: Color.blueGreen,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: FontFamily.podkovaRegular,
    marginBottom: 10,
  },
  subText: {
    color: Color.wHITE,
    alignSelf: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.sourceSansPro,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 20,
    marginBottom: 70,
  },
  //foodType styles
  mainView: {
    alignSelf: "center",
    borderWidth: Border.br_12xs_5,
    borderRadius: 20,
    backgroundColor: Color.black,
    borderColor: Color.colorGray_200,
    width: "auto",
    marginBottom: 10,
    //paddingLeft:40,
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
    marginLeft: 30,
    width: "auto",
  },
  separator: {
    width: 10,
    backgroundColor: "transparent",
  },
  //budget component style
  budgetWrapper: {
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: Border.br_12xs_5,
    borderRadius: 20,
    backgroundColor: Color.gray200,
    borderColor: Color.colorGray_200,
    width: "80%",
    height: 105,
    marginBottom: 90,
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

export { HomeScreen };
