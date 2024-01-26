import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';
import usersService from '../services/userService';
import axiosAuthorizationHandler from './middlewares/axiosAuthorizationHandler';
import axiosRefreshTokenHandler from './middlewares/axiosRefreshTokenHandler';
import rootReducer, { AppState } from './rootReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  debug: true,
};

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default; // eslint-disable-line @typescript-eslint/no-var-requires
//   middlewares.push(createDebugger());
// }

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

const persistor = persistStore(store, {}, () => {
  //   store.dispatch(appStartup());
  const state = store.getState() as AppState;
  if (state.auth.accessToken) {
    store.dispatch(usersService.getMe());
  }
});

axiosAuthorizationHandler(store);
axiosRefreshTokenHandler(store);

export { store, persistor };