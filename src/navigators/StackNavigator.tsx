import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ScreenName from '../constants/screenName';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

const StackNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigators;

const styles = StyleSheet.create({});
