import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../styling/NativeStyling';
import BS1 from './BS1';
import BS2 from './BS2';
import BS3 from './BS3';

const Bottom = createBottomTabNavigator();
function Bottomnavigator() {
  return (
    <>
      <Bottom.Navigator>
        <Bottom.Screen
          name="BS1"
          component={BS1}
          options={{
            headerShown: false,
            title: 'Coustem Text',
            // Add icon In Bottom navigation Start When the Icon Press changes the color
            tabBarIcon: tabinfo => {
              return (
                <Image
                  source={require('../assest/img/homeicon.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: tabinfo.focused ? 'lightblue' : 'black',
                  }}
                />
              );
            },
            // Add icon In Bottom navigation End
          }}
        />
        <Bottom.Screen
          name="BS2"
          component={BS2}
          options={{headerShown: false, title: 'Coustem Text'}}
        />
        <Bottom.Screen
          name="BS3"
          component={BS3}
          options={{headerShown: false, title: 'Coustem Text'}}
        />
      </Bottom.Navigator>
    </>
  );
}

export default Bottomnavigator;
