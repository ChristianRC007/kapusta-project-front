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
import { reportsReducer } from './reports';
import { authReducer } from './auth';
import { balanceReducer } from './balance';
import { transactionsReducer } from './transactions';
import summaryReducer from './transactionSummary/summary-reducer';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counter-reducer';
// import balanceOperations from './balance/balance-operations';

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
    reports: reportsReducer,
    counter: counterReducer,
    balance: balanceReducer,
    transactions: transactionsReducer,
    summary: summaryReducer,
  },
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
