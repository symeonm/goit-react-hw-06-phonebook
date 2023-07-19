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

export const addFilter = value => {
  return {
    type: 'contactList/filter',
    payload: value,
  };
};
