import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ScreenName from '../constants/screenName';
import Home from '../screens/home/Home';
import Gallery from '../screens/gallery/Gallery';
import Settings from '../screens/settings/Settings';

const Stack = createNativeStackNavigator();

const StackNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={ScreenName.Home} component={Home} />
      <Stack.Screen name={ScreenName.Gallery} component={Gallery} />
      <Stack.Screen name={ScreenName.Settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigators;

const styles = StyleSheet.create({});
