import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import screenName from '../constants/screenName';
import Profile from '../screens/profile/Profile';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigators = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, animation: 'shift'}}>
      <Tab.Screen name={screenName.HomeDrawer} component={DrawerNavigator} />
      <Tab.Screen name={screenName.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigators;

const styles = StyleSheet.create({});
