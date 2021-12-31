import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {MyReactNativeForm} from './MyReactNativeForm';

export default function Basescreen({navigation}) {
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#2196f3'}}>
      {/* <Text>Home Screen</Text> */}

      <Image
        source={{
          uri: 'https://cdn.educba.com/academy/wp-content/uploads/2019/01/cropped-EDUCBA_LOGO.png',
        }}
        style={{width: 250, height: 70, marginBottom: 50, alignSelf: 'center'}}
      />
      <MyReactNativeForm />
    </View>
  );
}

const styles = StyleSheet.create({});