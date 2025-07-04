
import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducer/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginDetail', 'getLengthSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ✅ Define RootState and AppDispatch using `store`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;






















// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../reducer/slices";
// const store = configureStore({
//     reducer:{
//         users:userSlice
//     }
// })
// export default store;





