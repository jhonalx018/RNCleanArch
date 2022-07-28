/**
 * consubler mobile POC
 * https://github.com/facebook/react-native
 *
 *
 * @format
 */

import React from 'react';
import {TouchableWithoutFeedback, LogBox, Keyboard} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigation from '@navigation/main';
import {store, persistor} from '@store/StoreSetup';
import {Theme} from '@theme/Index';
import LocalizationProvider from '@internationalization/LocalizationProvider';
import DepsInjector from '@hook/UseDepsInjector';

LogBox.ignoreLogs(['Warning: ...']);

// FILTER warns about styledComponents
const consoleWarnCopy = console.warn;
console.warn = function filterWarnings(msg: any) {
  const suppressedWarnings = ['to contain units'];

  if (!suppressedWarnings.some((entry: string) => msg.includes(entry))) {
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    consoleWarnCopy.apply(console, arguments);
  }
};

const App = () => (
  <DepsInjector>
    <LocalizationProvider>
      <ThemeProvider theme={{Theme}}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}>
              <MainNavigation />
            </TouchableWithoutFeedback>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </LocalizationProvider>
  </DepsInjector>
);

export default App;
