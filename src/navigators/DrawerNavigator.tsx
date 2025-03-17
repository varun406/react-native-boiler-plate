import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import screenName from '../constants/screenName';
import Home from '../screens/home/Home';
import BottomNavigators from './BottomNavigator';
import Gallery from '../screens/gallery/Gallery';
import CustomDrawer from '../components/CustomDrawer';
import About from '../screens/about/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={screenName.HomeDrawer}
        component={BottomNavigators}
      />
      <Drawer.Screen name={screenName.About} component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
