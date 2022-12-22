import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Autocomplete from "react-native-autocomplete-input";

import useApi from "../../GetApiHook";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import MapViewDirections from "react-native-maps-directions";
export default function Home({ navigation }) {
  console.log("loc:", loc);
  console.log("destination:", destination);
  const { data, data1 } = useApi(
    "https://data.bus-data.dft.gov.uk/api/v1/dataset/2100/?api_key=b83aefcb293a2b59bc782f70c6c365cf17b2f154"
  );

  var namesArray = data?.map((item) => item.name);
  var namesArray1 = data1?.map((item) => item.name);
  //  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  // For Selected Data
  const [selectedValue, setSelectedValue] = useState({});
  const [selectedValue1, setSelectedValue1] = useState({});

  const findData = (query) => {
    // Method called every time when we change the value of the input
    if (query) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, "i");

      setFilteredData(namesArray.filter((data) => data.search(regex) >= 0));
    } else {
      // If the query is null then return blank
      setFilteredData([]);
    }
  };
  const findData1 = (query) => {
    // Method called every time when we change the value of the input
    if (query) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, "i");

      setFilteredData1(namesArray1.filter((data) => data.search(regex) >= 0));
    } else {
      // If the query is null then return blank
      setFilteredData1([]);
    }
  };

  // console.log("from:" ,data[0].name);
  // console.log("to:" ,data1[0].name);
  console.log(namesArray);
  console.log(namesArray1);

  //   console.log(data,data1)

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4 }}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          // Data to show in suggestion
          data={filteredData}
          // Default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedValue) === "{}" ? "" : selectedValue
          }
          // Onchange of the text changing the state of the query
          // Which will trigger the findFilm method
          // To show the suggestions
          onChangeText={(text) => findData(text)}
          placeholder="Enter Location"
          flatListProps={{
            renderItem: ({ item }) => (
              // For the suggestion view
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  global.loc = item;
                  setSelectedValue(item);
                  setFilteredData([]);
                  console.log(loc);
                }}
              >
                <Text style={{ fontSize: 20, margin: 10 }}>{item}</Text>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </View>
      <View style={{ flex: 0.4 }}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          // Data to show in suggestion
          data={filteredData1}
          // Default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedValue1) === "{}" ? "" : selectedValue1
          }
          // Onchange of the text changing the state of the query
          // Which will trigger the findFilm method
          // To show the suggestions
          onChangeText={(text) => findData1(text)}
          placeholder="Enter Destination"
          flatListProps={{
            renderItem: ({ item }) => (
              // For the suggestion view
              <TouchableOpacity
                onPress={() => {
                  global.destination = item;
                  setSelectedValue1(item);
                  setFilteredData1([]);
                  console.log(destination);
                }}
              >
                <Text style={{ fontSize: 20, margin: 10 }}>{item}</Text>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Timetable");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            Find Bus
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  autocompleteContainer: {
    borderWidth: 0,
  },
  descriptionContainer: {
    padding: 10,

    justifyContent: "center",
  },
  itemText: {
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: "center",
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2596be",
    padding: 25,
    margin: 20,
    borderRadius: 20,
    marginTop: 50,
  },
});
