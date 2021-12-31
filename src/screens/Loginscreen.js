import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import {Formik} from 'formik';

export default function LoginScreen({navigation}) {
  const [text, setText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  
  const handelLogin = (credentials,setSubmitting) => {
    const url = 'http://localhost:5000/api/auth/login';

    axios
      .post(url, credentials)
      .then(response => {
        const result = response;
        // const{message,status,data}=result;
        if (__v !== 0) {
          console.log('enter correct options');
        } else {
          navigation.navigate('Basescreen');
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        console.log('Check Internet');
        console.log(error);
      });
  };

  // const onSubmit = (text, Password) => {
  //   // handleSubmit();
  //   if (text == '' || Password == '') {
  //     alert('please fill the fields');
  //   } else {
  //     navigation.navigate('Basescreen');
  //     alert(text + '  ' + Password);
  //   }
  // };

  return (
    <View style={{flex: 1, backgroundColor: '#2196f3'}}>
      {/* <Text>Home Screen</Text> */}

      <Image
        source={{
          uri: 'https://cdn.educba.com/academy/wp-content/uploads/2019/01/cropped-EDUCBA_LOGO.png',
        }}
        style={{
          width: 250,
          height: 70,
          marginBottom: 50,
          marginTop: 190,
          alignSelf: 'center',
        }}
      />
      <Formik
        initialValues={{Email: '', Password: ' '}}
        onSubmit={(values,{setSubmitting}) => {
          if (values.Email == '' || values.Password == '') {
            // alert('please fill the fields');
            setSubmitting(false);
            console.log(credentials);
            // console.log('Check Internet');
          } else {
            handelLogin(values,setSubmitting);
            // navigation.navigate('Basescreen');
            // alert(values.Email + '  ' + values.Password);
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
          <View>
            {/* <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />*/}
            {/* <Button onPress={handleSubmit} title="Submit" />  */}

            <TextInput
              style={{marginHorizontal: 20}}
              label="Email"
              // value={values.text}
              // onChangeText={text => setText(text)}
              onChangeText={handleChange('Email')}
              onBlur={handleBlur('Email')}
              value={values.Email}
              mode="outlined"
            />
            <TextInput
              style={{marginHorizontal: 20}}
              label="Password"
              // onChangeText={Password => setPassword(Password)}
              onChangeText={handleChange('Password')}
              onBlur={handleBlur('Password')}
              value={values.Password}
              mode="outlined"
            />
            {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      /> */}
            <View
              style={{
                marginTop: 50,
                height: 40,
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dddf00',
                borderRadius: 20,
                alignSelf: 'center',
              }}>
              {!isSubmitting && (
                <TouchableOpacity onPress={() => handleSubmit(values)}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Sign IN
                  </Text>
                </TouchableOpacity>
              )}
              {isSubmitting && (
                <ActivityIndicator
                  // disabled={true}
                  size="large"
                  color={'#ebcefa'}
                />
              )}
            </View>
            <TouchableOpacity
              style={{
                //   marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}
              onPress={() => navigation.navigate('Signupscreen')}>
              <Text>Not Have an account?</Text>
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
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Sign UP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
