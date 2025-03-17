import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenName from '../constants/screenName';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

const PublicStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <Stack.Screen name={ScreenName.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default PublicStackNavigator;

const styles = StyleSheet.create({});
