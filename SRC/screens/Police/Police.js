import React, { useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from '../../styling/NativeStyling';
import {ReactButton} from '../../components/reactbutton';
import Geolocation from '@react-native-community/geolocation';


const Police = () => {
  const [info,setInfo] = useState(0)
  const [infos,setInfos] = useState(0)

  Geolocation.getCurrentPosition(data => {
    setInfo(data.coords.latitude)
    setInfos(data.coords.longitude) 
  });
  
  return (
    <View>
      <View style={[styles.alignItemsCenter, styles.m2]}>
         <Text style={{color:'red',}}>SQUIP - <Text style={{color:'blue',}}>POLICE</Text></Text>
      </View>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{
            height: 400,
            width: '100%',
          }}
          region={{
            latitude: info,
            longitude: infos,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
            <Marker
            coordinate={{
              latitude: info,
              longitude: infos,
            }}/>
          </MapView>
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
