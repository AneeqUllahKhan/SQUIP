import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Bottomnavigator from '../bottom/bottomnavigator';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';
export default function Login({navigation}) {
  const [model, setmodel] = useState();

  const loginFunction = () => {
    console.log(model);
    
  };
  return (
    <>
      <View style={[styles.p2, styles.bgWhite, styles.h100]}>
        <View style={[styles.mt5]}>
          <View>
            <Text style={[styles.fs2, styles.textBlack, styles.textCenter]}>
              Login
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
              onChangeText={e => setmodel({...model, password: e})}
              placeholderTextColor="black"
              placeholder="Password"
            />
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton
              onPress={() => {
                // navigation.navigate('HomeScreen');
                loginFunction();
              }}
              label="Sign in"
            />
          </View>
          <View>
            <Text style={[styles.fs5, styles.textBlack, styles.textCenter]}>
              Forgot Password?
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.fs5,
                styles.textBlack,
                styles.textCenter,
                styles.mt2,
                styles.mb2,
              ]}
            >
              OR
            </Text>
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton onPress={() => {}} label="FaceBook With Sign in" />
          </View>
          <View style={[styles.mb2, styles.rounded]}>
            <ReactButton onPress={() => {}} label="Google With Sign in" />
          </View>
          <View style={[styles.flexCenter, styles.flexRow]}>
            <Text style={[styles.fs6, styles.textBlack, styles.me5]}>
              Forgot Password?
            </Text>
            <ReactButton
              onPress={() => {
                navigation.navigate('Signup');
              }}
              label="Create Account"
            />
          </View>
        </View>
      </View>
    </>
  );
}
