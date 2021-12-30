// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
// import {TextInput} from 'react-native-paper';
// const App = () => {
//   const [text, setText] = React.useState('');
//   return (
//     <PaperProvider>
//       <SafeAreaView style={{backgroundColor: '#1aff', flex: 1}}>
//         <Text>Lorem10</Text>
//         <Text>Lorem10</Text>
//         <TextInput
//           label="Email"
//           value={text}
//           onChangeText={text => setText(text)}
//           mode='outlined'
//         />
//         <TextInput
//           label="Password"
//           value={text}
//           onChangeText={text => setText(text)}
//           mode='outlined'
//         />
//         <Text>Lorem10</Text>
//         <Text>Lorem10</Text>
//         <Text>Lorem10</Text>
//         <Text>Lorem10</Text>
//       </SafeAreaView>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import HomeScreen from './src/screens/Homescreen';
// import HomeScreen from './src/screens/HomeScreen';

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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Signupscreen" component={Signupscreen} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
