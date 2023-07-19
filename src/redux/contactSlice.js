const contactState = { contact: [] };

export const contactReducer = (state = contactState, action) => {
  switch (action.type) {
    case 'contactForm/addContact':
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    case 'contactList/deleteContact':
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
};

export const addContact = value => {
  return {
    type: 'contactForm/addContact',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contactList/deleteContact',
    payload: value,
  };
};
