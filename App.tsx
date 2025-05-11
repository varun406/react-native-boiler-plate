import React from 'react';
import {Appearance} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/navigators/RootNavigator';
import {persistor, store} from './src/redux/store';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import {navigationRef} from './src/helpers/navigationHelper';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const colorScheme = Appearance.getColorScheme();

  console.log('>>', colorScheme);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigator />
          <Toast />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
