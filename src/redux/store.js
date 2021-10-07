import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { reportReducer } from './report';
import { authReducer } from './auth';
import { balanceReducer } from './balance';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = { key: 'token', whitelist: ['token'], storage };

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    report: reportReducer,
    balance: balanceReducer,
  },
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
