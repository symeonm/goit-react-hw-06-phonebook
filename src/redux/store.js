import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
const initialState = {
  contact: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactForm/addContact':
      return { ...state, contact: [...state.contact, action.payload] };
    case 'contactList/deleteContact':
      return {
        ...state,
        contact: action.payload,
      };
    case 'contactList/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
