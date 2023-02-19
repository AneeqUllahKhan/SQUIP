import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../../styling/NativeStyling';
import {ReactButton} from '../../components/reactbutton';


const Police = () => {
  return (
    <View>
      <View style={[styles.alignItemsCenter, styles.m2]}>
         <Text style={{color:'red',}}>SQUIP - <Text style={{color:'blue',}}>POLICE</Text></Text>
      </View>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{
            height: 500,
            width: '100%',
          }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>

      <View
        style={[
          styles.flexCenter,
          styles.flexRow,
          styles.justifyContentAround,
        ]}>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Hospital');
            }}
            label="Fight / Fire"
          />
        </View>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Hospital');
            }}
            label="Robbery"
          />
        </View>
        <View style={styles.m1}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Hospital');
            }}
            label="Harrassment"
          />
        </View>
      </View>
    </View>
  );
};

export default Police;
