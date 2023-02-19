import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styling/NativeStyling';
import Bottomnavigator from './bottomnavigator';

function BS1() {
  return (
    <>
      <View
        style={[
          styles.justifyContentCenter,
          styles.alignItemsCenter,
          {flex: 1},
        ]}
      >
        <Text style={[styles.textBlack, styles.fs1]}>BS 1</Text>
      </View>
    </>
  );
}

export default BS1;
