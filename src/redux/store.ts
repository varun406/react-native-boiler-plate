import {configureStore, combineReducers} from '@reduxjs/toolkit';
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
import mmkvStorage from '../mmkv/storage';
import counterSlice from './counter/counterSlice';
import userSlice from './user/userSlice';

// Combine reducers properly
const rootReducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

// Persist config with MMKV storage
const persistConfig = {
  key: 'root',
  storage: mmkvStorage, // Use MMKV
  exclude: ['counter'],
  blacklist: ['counter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: __DEV__,
});

export const persistor = persistStore(store);

// Typed hooks for Redux usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Correctly typed hooks
import {useDispatch, useSelector} from 'react-redux';
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
