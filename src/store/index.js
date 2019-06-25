import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from './reducers';

const middleware = [thunk];
const enhancers = [devToolsEnhancer()];
const config = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

const persistor = persistStore(store);

export { store, persistor };
