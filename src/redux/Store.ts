/* eslint-disable @typescript-eslint/no-var-requires */
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  // eslint-disable-next-line global-require
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store: any = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}
