import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Signup from '../screens/signup';
import HomeScreen from '../screens/home';
import Splash from '../screens/Splash';
import Police from '../screens/Police/Police';
import Hospital from '../screens/Hospital/Hospital';
import FireBrigade from '../screens/FireBrigade/FireBrigade';

const Stack = createNativeStackNavigator();

function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
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
          name="Police"
          component={Police}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Hospital"
          component={Hospital}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Firebrigade"
          component={FireBrigade}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigation;
