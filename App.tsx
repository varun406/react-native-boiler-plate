import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import firebaseDistribution from '@react-native-firebase/app-distribution';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/navigators/RootNavigator';
import { persistor, store } from './src/redux/store';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import { navigationRef } from './src/helpers/navigationHelper';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const colorScheme = Appearance.getColorScheme();

  console.log('>>', colorScheme);

  useEffect(() => {
    const checkUpdate = async () => {
      try {
        if (!__DEV__) {
          // @ts-ignore - The method exists but might not be in the current type definitions
          await firebaseDistribution().updateIfNewReleaseAvailable();
        }
      } catch (error) {
        console.error('Firebase App Distribution Error:', error);
      }
    };
    checkUpdate();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigator />
          <Toast />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
