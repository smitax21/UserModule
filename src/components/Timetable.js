
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Autocomplete from 'react-native-autocomplete-input';

import useApi from "../../GetApiHook";
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import MapViewDirections from 'react-native-maps-directions';
export default function Timetable({navigation}) {
  
const busTimeTable = [
{
    busNo: 52,
    ArrivalMinutes: 7,
    status: "On Time",
    moveTime : 35,
    currentlyAt : 'London Street xyz'
},
{
    busNo: 85,
    ArrivalMinutes: 17,
    status: "Running Late",
    moveTime : 15,
    currentlyAt : 'Pond Street xyz'
},
{
    busNo: 52,
    ArrivalMinutes: 7,
    status: "On Time",
    moveTime : 35,
    currentlyAt : 'London Street xyz'
},
{
    busNo: 85,
    ArrivalMinutes: 17,
    status: "Running Late",
    moveTime : 15,
    currentlyAt : 'Pond Street xyz'
},
{
    busNo: 52,
    ArrivalMinutes: 7,
    status: "On Time",
    moveTime : 35,
    currentlyAt : 'London Street xyz'
},
{
    busNo: 85,
    ArrivalMinutes: 17,
    status: "Running Late",
    moveTime : 15,
    currentlyAt : 'Pond Street xyz'
},



]



    return (
      


      <View style={styles.container}>

        <View style={{borderWidth:2, borderColor:'grey', padding:20, margin: 20 ,borderRadius:6}}>
            <Text style={{fontSize: 20}}> {loc}</Text>
        </View>
        <View style={{borderWidth:2, borderColor:'grey', padding:20, margin: 20  ,borderRadius:6}}>
            <Text style={{fontSize: 20}}> {destination}</Text>
        </View>
<FlatList
          data={busTimeTable}
        //   numColumns={2}
        //   columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            
            <View
              style={{
                borderWidth:2,
                flex:1,
                flexDirection:'row',
                padding: 10,
                margin: 10
              }}
            >

                <View  style={{flex: 0.7}}>

                    <Text> Currently at : {item.currentlyAt}</Text>

                    <View style= {{flex: 1, flexDirection: 'row'}}>
                        <Text> Status: </Text> 
                        <Text> {item.status}</Text>
                        {/* ({item.status=='On Time'})? (<Text style= {{color: 'green'}}>{item.status}</Text>):
                        (<Text style= {{color: 'orange'}}>{item.status}</Text>) */}


                    </View>

                    <View style= {{flex: 1, flexDirection: 'row'}}>
                        <Text style={{fontSize:30}}> Arriving in</Text> 
                        <Text style={{fontSize:30 , color: 'green' , fontWeight:'700'}}> {item.ArrivalMinutes} </Text>
                        <Text style={{fontSize:30}}>minutes</Text>
                    </View>
                    
<Text></Text>
                    <Text> You should reach your destination in {item.moveTime} minutes</Text>
                     </View>

                <View style ={{flex:0.3}}>
                    
                <Text style={{textAlign:'center', color:'grey'}}> Bus Number</Text>
                <Text style={{fontSize:70, textAlign:'center', fontWeight:'600', color:'grey'}}> {item.busNo}</Text>
                 </View>

                
              
            </View>
          )}
        />

        </View>
    





    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      
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
