/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './src/application';
import Loader from './src/infrastructure/components/Loader';
import ToDo from './src/presentation/component';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader loading />} persistor={getPersistor()}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
          <ToDo />
      </PersistGate>
    </Provider>
  );
}
export default App;