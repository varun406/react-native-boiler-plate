import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import screenName from '../constants/screenName';
import Home from '../screens/home/Home';
import BottomNavigators from './BottomNavigator';
import Gallery from '../screens/gallery/Gallery';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={screenName.HomeDrawer}
        component={BottomNavigators}
      />
      <Drawer.Screen name={screenName.Gallery} component={Gallery} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
