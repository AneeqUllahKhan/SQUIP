import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Login from '../screens/login';
import Signup from '../screens/signup';
import BS1 from '../bottom/BS1';
import BS2 from '../bottom/BS2';
import BS3 from '../bottom/BS3';

const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <>
      <Drawer.Navigator>
        {/* <Drawer.Screen
          name="Drawerhome"
          component={Drawerhome}
          options={{title: 'Home',headerShown:false}}
        /> */}
        {/* <Drawer.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Signup'}}
        /> */}
      </Drawer.Navigator>
    </>
  );
};
export default Drawernavigator;
