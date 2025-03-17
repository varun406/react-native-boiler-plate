import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import {useAppSelector} from '../redux/store';
import PublicStackNavigator from './PublicStackNavigator';
import {ThemeProvider} from '../context/ThemeProvider';

const RootNavigator = () => {
  const {isLoggedIn} = useAppSelector(state => state.user);

  return (
    <NavigationContainer>
      <ThemeProvider>
        {isLoggedIn ? <DrawerNavigator /> : <PublicStackNavigator />}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
