import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {ReactButton, ReactButtonOutline} from '../components/reactbutton';
import styles from '../styling/NativeStyling';
export default function Signup({navigation}) {
  const [model, setmodel] = useState('');

  const SignupFunction = () => {
    console.log(model);
  };

  return (
    <>
      <View style={[styles.p2, styles.bgWhite, styles.h100]}>
        <View style={[styles.mt5]}>
          <View>
            <Text
              style={[
                styles.fs1,
                styles.textBlack,
                styles.textCenter,
                styles.mb3,
              ]}
            >
              Create New Account
            </Text>
          </View>
          <View style={[styles.mb2, styles.mt2]}>
            <TextInput
              style={[
                styles.border1,
                styles.textBlack,
                styles.ps2,
                styles.rounded,
              ]}
              onChangeText={e => setmodel({...model, username: e})}
              placeholderTextColor="black"
              placeholder="Username"
            />
          </View>
          <View style={[styles.mb2]}>
            <TextInput
              style={[
                styles.border1,
                styles.textBlack,
                styles.ps2,
                styles.rounded,
              ]}
              onChangeText={e => setmodel({...model, email: e})}
              placeholderTextColor="black"
              placeholder="Email"
            />
          </View>
          <View style={[styles.mb2]}>
            <TextInput
              style={[
                styles.border1,
                styles.textBlack,
                styles.ps2,
                styles.rounded,
              ]}
              onChangeText={e => setmodel({...model, contact: e})}
              placeholderTextColor="black"
              placeholder="Phone Number"
            />
          </View>
          <View style={[styles.mb2]}>
            <TextInput
              style={[
                styles.border1,
                styles.textBlack,
                styles.ps2,
                styles.rounded,
              ]}
              onChangeText={e => setmodel({...model, password: e})}
              placeholderTextColor="black"
              placeholder="Password"
            />
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton
              onPress={() => {
                // navigation.navigate('HomeScreen');
                SignupFunction();
              }}
              label="Create Account"
            />
          </View>
          <View style={[styles.flexCenter, styles.flexRow]}>
            <Text style={[styles.fs6, styles.textBlack, styles.me5]}>
              Already have an Account?
            </Text>
            <ReactButtonOutline
              onPress={() => {
                navigation.navigate('Login');
              }}
              label="Login"
            />
          </View>
        </View>
      </View>
    </>
  );
}
