import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';

export default function Signupscreen({navigation}) {
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [AgainSetpassword, setAgainSetpassword] = React.useState('');

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
      <TextInput
        style={{marginHorizontal: 20}}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        mode="outlined"
      />
      <TextInput
        style={{marginHorizontal: 20}}
        label="Password"
        value={Password}
        onChangeText={Password => setPassword(Password)}
        mode="outlined"
      />
      <TextInput
        style={{marginHorizontal: 20}}
        label="RE-Password"
        value={AgainSetpassword}
        onChangeText={AgainSetpassword => setAgainSetpassword(AgainSetpassword)}
        mode="outlined"
      />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      /> */}
      <TouchableOpacity
        style={{
          marginTop: 30,
          height: 40,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dddf00',
          borderRadius: 20,
          //   marginHorizontal:20
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('Detail')}>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>Sign UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          //   marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{fontSize: 20}}>Have an account?</Text>
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: '#e56b6f',
            borderRadius: 20,
            //   marginHorizontal:20
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
            Sign IN
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
