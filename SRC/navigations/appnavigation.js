// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../authscreens/login';
import Signup from '../authscreens/signup';
import HomeScreen from '../screens/home';
import Splash from '../screens/Splach';
import Apphome from '../screens/Apphome';

const Stack = createNativeStackNavigator();

function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Apphome"
          component={Apphome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigation;
