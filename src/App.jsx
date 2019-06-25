import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Steps from 'components/Steps';
import StepChanger from 'components/StepChanger';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Steps />
      <StepChanger />
    </PersistGate>
  </Provider>
);

export default App;
