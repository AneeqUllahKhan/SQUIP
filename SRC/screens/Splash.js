import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from '../styling/NativeStyling';
import logo from '../assest/img/logo.png';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View
      style={[
        styles.bgBlack,
        styles.justifyContentCenter,
        styles.alignItemsCenter,
        {flex: 1},
      ]}
    >
      <Image source={logo} resizeMode="cover" />
      <Text
        style={[styles.textWhite, styles.fs1, styles.textCenter, styles.mt5]}
      >
        Developed By Aneeq
      </Text>
    </View>
  );
}

export default Splash;
