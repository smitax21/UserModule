import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/components/Home'
import Timetable from './src/components/Timetable'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
       
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Timetable" component={Timetable}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
