import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
