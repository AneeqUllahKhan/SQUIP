import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styling/NativeStyling';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
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
      <Text
        style={[styles.textWhite, styles.fs1, styles.textCenter, styles.mt5]}
      >
        Splash Screen
      </Text>
    </View>
  );
}

export default Splash;
