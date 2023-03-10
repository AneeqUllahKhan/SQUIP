import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Drawernavigator from '../navigations/drawernavigator';
import styles from '../styling/NativeStyling';
import logo from '../assest/img/logo.png';
import {ReactButton} from '../components/reactbutton';

function HomeScreen({navigation}) {
  return (
    <View>
      <View style={[styles.alignItemsCenter, styles.m3]}>
        <Image source={logo} resizeMode="cover" />
      </View>
      <View style={[styles.flexCenter]}>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Police');
            }}
            label="Police"
          />
        </View>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Firebrigade');
            }}
            label="Fire Brigade"
          />
        </View>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Hospital');
            }}
            label="Hospital"
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;


