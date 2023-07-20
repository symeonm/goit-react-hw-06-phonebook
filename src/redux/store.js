import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
