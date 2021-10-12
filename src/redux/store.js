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
import { transactionsReducer } from './transactions';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counter-reducer';
import balanceOperations from './balance/balance-operations';

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
    counter: counterReducer,
    balance: balanceReducer,
    transactions: transactionsReducer,
  },
  middleware,
});


//getting current balance on start application
store.dispatch(balanceOperations.getBalance());
store.dispatch(balanceOperations.updateCurrentExpenses());
store.dispatch(balanceOperations.updateCurrentIncomes());

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
