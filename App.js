
import {Provider as PaperProvider} from 'react-native-paper';


import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import Homescreen from './src/screens/Homescreen';
import Basescreen from './src/screens/Basescreen';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

function Detail() {
  return (
    <View>
      <Text>dwdwd</Text>
    </View>
  );
}

function Home() {
  return (
    <View>
      <Text>efe</Text>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={Homescreen} />
          <Stack.Screen name="Signupscreen" component={Signupscreen} />
          <Stack.Screen name="Basescreen" component={Basescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
