import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styling/NativeStyling';

const BS2 = () => {
  return (
    <View
      style={[styles.justifyContentCenter, styles.alignItemsCenter, {flex: 1}]}
    >
      <Text style={[styles.textBlack, styles.fs1]}>BS 2</Text>
    </View>
  );
};

export default BS2;
