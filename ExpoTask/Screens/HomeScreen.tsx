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
import { useEffect, useState } from "react";
import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";
import { ToastProvider, useToast } from "react-native-toast-notifications";

//foodType data
export const feeds = [
  {
    id: "1",
    foodType: "FASTFOOD",
  },
  {
    id: "2",
    foodType: "SANDWICH",
  },
  {
    id: "3",
    foodType: "NOODLES",
  },
  {
    id: "4",
    foodType: "BURGER",
  },
  {
    id: "5",
    foodType: "BREAKFAST & BRUNCH",
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
    foodType: "DESSERTS",
  },
  {
    id: "10",
    foodType: "PIZZA",
  },
  {
    id: "11",
    foodType: "RAMEN",
  },
  {
    id: "12",
    foodType: "MEDITERRANEAN",
  },
];
//Budget component data
export const budget = {
  id: "1",
  amount: 1,
};
//var amount = budget.amount;
const HomeScreen = ({ navigation }) => {
  const toast = useToast();
  const [values, setValues] = useState([0, budget.amount]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoodTypes, setFilteredFoodTypes] = useState([]);
  const defaultSelectedFoodType = "FASTFOOD";
  const [selectedFood, setSelectedFood] = useState(defaultSelectedFoodType);
  const [inputChanged, setInputChanged] = useState(false);
  //geolocation
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [latitude, setLatitude] = useState(null); // State for latitude
  const [longitude, setLongitude] = useState(null); // State for longitude
  const [formattedCategories, setFormattedCategories] = useState([]);
  const [selectedFoodAlias, setSelectedFoodAlias] = useState("");

  useEffect(() => {
    requestLocationPermission();
    fetchCategories();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message:
              "Food Finder needs access to your location to provide recommendations.",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermissionGranted(true);
        } else {
          setLocationPermissionGranted(false);
        }
      } else {
        console.warn(
          "Location permission not handled for this platform:",
          Platform.OS
        );
      }
    } catch (error) {
      console.error("Error requesting location permission:", error);
      setLocationPermissionGranted(false);
    }
  };

  useEffect(() => {
    // Get current position when location permission is granted
    if (locationPermissionGranted) {
      Geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from position object
          const { latitude, longitude } = position.coords;
          // Set current location state
          setCurrentLocation({ latitude, longitude });
          setLatitude(latitude);
          setLongitude(longitude);
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    }
  }, [locationPermissionGranted]);

  //fetch the categories data
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://api.yelp.com/v3/categories", {
        headers: {
          Authorization:
            "Bearer o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx",
        },
      });
      const data = await response.json();
      const categories = data.categories;
      const parentAlias = "restaurants";
      const restaurantCategories = filterCategoriesByParentAlias(
        categories,
        parentAlias
      );
      const formattedCategories = restaurantCategories.map((category) => ({
        title: category.title,
        alias: category.alias,
      }));
      console.log("categories:", formattedCategories);
      setFormattedCategories(formattedCategories);
      return formattedCategories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return []; // Return an empty array or handle the error accordingly
    }
  };
  const filterCategoriesByParentAlias = (categories, parentAlias) => {
    return categories.filter((category) =>
      category.parent_aliases.includes(parentAlias)
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = formattedCategories.filter((item) =>
      item.alias.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodTypes(filtered);
  };

  const multiSliderValuesChange = (values) => {
    setValues(values);
  };

  const handleFoodTypePress = (title, alias) => {
    setSelectedFood(title);
    setSelectedFoodAlias(alias);
  };

  //To pass the values to next page
  const handleHotelListPress = () => {
    if (!locationPermissionGranted) {
      toast.show(
        "Please enable location services to find restaurants near you",
        {
          type: "normal",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
          animationType: "slide-in",
        }
      );
      console.log("Location permission not granted.");
    } else {
      // Handle case when location permission is granted
      if (selectedFoodAlias) {
        console.log("Selected cuisine:", selectedFoodAlias);
        navigation.navigate("HotelListScreen", {
          minValue: values[0],
          maxValue: values[1],
          cuisineSelected: selectedFoodAlias,
          lat: latitude,
          long: longitude,
        });
      } else {
        console.log("Please select a cuisine.");
      }
    }
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
          data={formattedCategories}
          renderItem={({ item }) => (
            <FoodType
              foodType={item.title}
              defaultSelected={defaultSelectedFoodType === item.title}
              onPress={() => handleFoodTypePress(item.title, item.alias)}
            />
          )}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={SeparatorComponent}
          contentContainerStyle={[
            styles.listContainer,
            formattedCategories.length <= 2
              ? { width: Dimensions.get("window").width }
              : { width: ITEM_WIDTH * formattedCategories.length },
            // styles.listContainer,
            // { width: filteredFoodTypes.length * 100 }
          ]}
        />

        <Text style={styles.budgetText}>How much to spend?</Text>
        <Text style={styles.subText}>{`${budget.amount} left`}</Text>

        {/* BudgetComponent */}
        {values[1] > 0 && (<TouchableOpacity>
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
        </TouchableOpacity>)}
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
