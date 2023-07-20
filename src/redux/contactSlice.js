import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [],
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contact: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// const contactState = { contact: [] };

// export const addContact = createAction('contactList/addContact');

// export const deleteContact = createAction('contactList/deleteContact');

// export const contactReducer = createReducer(contactState, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       return {
//         ...state,
//         contact: [...state.contact, action.payload],
//       };
//     })
//     .addCase(deleteContact, (state, action) => {
//       return {
//         ...state,
//         contact: action.payload,
//       };
//     })
// );
