import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Tabs from './navigation/Tabs';
import configureStore from './redux/Store';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={configureStore().store}>
        <PersistGate loading={null} persistor={configureStore().persistor}>
          <Tabs />
        </PersistGate>
      </Provider>
    );
  }
}
