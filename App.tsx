import React from 'react';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
