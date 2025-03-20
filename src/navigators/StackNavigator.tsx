import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenName from '../constants/screenName';
import Gallery from '../screens/gallery/Gallery';
import Settings from '../screens/settings/Settings';
import BottomNavigators from './BottomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen
        name={ScreenName.BottomTab}
        component={BottomNavigators}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ScreenName.Gallery} component={Gallery} />
      <Stack.Screen name={ScreenName.Settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigators;

const styles = StyleSheet.create({});
