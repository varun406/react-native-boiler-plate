/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Appearance, StyleSheet} from 'react-native';
import './gesture-handler';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import {navigationRef} from './src/helpers/navigationHelper';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const colorScheme = Appearance.getColorScheme();

  console.log('>>', colorScheme);
  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
