import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../GlobalStyles";
import * as Svg from "react-native-svg";
import MapView, { Marker } from "react-native-maps";

const HotelListScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [tappedCoordinates, setTappedCoordinates] = useState([]);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setTappedCoordinates([...tappedCoordinates, coordinate]);
    setMarkers([...markers, coordinate]);
    console.log("Tapped coordinates:", coordinate);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.titleText}>Map</Text>
        <View style={styles.mapView}>
          <MapView
            style={styles.mapStyle}
            onPress={handleMapPress}
            initialRegion={{
              latitude: 20.5937,
              longitude: 78.9629,
              latitudeDelta: 2,
              longitudeDelta: 2,
            }}
            showsUserLocation={true}
          >
            {tappedCoordinates.map((coordinate, index) => (
              <Marker key={index} coordinate={coordinate} />
            ))}
          </MapView>
        </View>
        <Text style={styles.textColor}>Tapped coordinates:</Text>
        <View style={styles.coordinateContainer}>
          {tappedCoordinates.map((coordinate, index) => (
            <Text key={index} style={styles.textColor}>
              {`Lat: ${coordinate.latitude}, Long: ${coordinate.longitude}`}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  mainContainer: {
    // flex:1,
    width,
    height,
    backgroundColor: Color.bGNavy900,
    //margin:10
  },
  mapView: {
    justifyContent: "center",
    borderRadius: 10,
    margin: 8,
  },
  mapStyle: {
    height: "70%",
    width: "100%",
  },
  titleText: {
    color: Color.wHITE,
    fontSize: 40,
  },
  textColor: {
    color: Color.blueGreen,
  },
  coordinateContainer: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 8,
    borderColor: Color.blueGreen,
    backgroundColor: Color.greyGreen,
  },
});

export { HotelListScreen };
