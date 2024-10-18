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
  import { SelectButton } from "../components/atom/SelectButton";

  const SampleScreenOne = ({ navigation}) =>{

    const handleNavigationTwo = () => {
        navigation.goBack()
    
    }

    return(
        <View>
            <Text>sample screen one is here</Text>
            <SelectButton text="back" onPress={handleNavigationTwo} />
            
        </View>
    )
  }

  export { SampleScreenOne };