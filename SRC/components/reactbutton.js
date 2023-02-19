import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styling/NativeStyling';


 function ReactButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.btn,styles.bgRed]}>
        <Text style={[styles.textWhite,styles.textCenter,]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
};
 function ReactButtonOutline(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.btn,styles.border1,styles.borderorange,styles.bgWhite]}>
        <Text style={[styles.textorange,styles.textCenter,]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export {ReactButton,ReactButtonOutline};