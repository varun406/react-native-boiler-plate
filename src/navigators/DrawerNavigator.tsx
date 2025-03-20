import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomDrawer from '../components/CustomDrawer';
import screenName from '../constants/screenName';
import About from '../screens/about/About';
import Home from '../screens/home/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={screenName.Home} component={Home} />
      <Drawer.Screen name={screenName.About} component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
