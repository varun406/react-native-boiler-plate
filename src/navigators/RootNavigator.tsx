import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from '../context/ThemeProvider';
import {useAppSelector} from '../redux/store';
import PublicStackNavigator from './PublicStackNavigator';
import StackNavigators from './StackNavigator';
import {navigationRef} from '../helpers/navigationHelper';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isLoggedIn} = useAppSelector(state => state.user);

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
        <RootStack.Navigator
          screenOptions={{headerShown: false, animation: 'none'}}>
          {isLoggedIn ? (
            <RootStack.Screen name="AuthStack" component={StackNavigators} />
          ) : (
            <RootStack.Screen name="Public" component={PublicStackNavigator} />
          )}
        </RootStack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
