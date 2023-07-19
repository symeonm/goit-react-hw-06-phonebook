const filterState = { filter: '' };

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'contactList/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const addFilter = value => {
  return {
    type: 'contactList/filter',
    payload: value,
  };
};
