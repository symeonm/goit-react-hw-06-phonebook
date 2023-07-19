import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const contact = useSelector(state => state.contacts.contact);
  const dispatch = useDispatch();
  const filtration = useSelector(state => state.filters.filter);
  const deleteNumber = idValue => {
    const updContacts = contact.filter(obj => obj.idValue !== idValue);
    dispatch(deleteContact([...updContacts]));
  };

  const filterContact = contact.filter(obj =>
    obj.nameValue.toLowerCase().includes(filtration.toLowerCase())
  );

  return (
    <ul>
      {filterContact.map(({ idValue, nameValue, numberValue }) => (
        <li key={idValue}>
          {nameValue}: {numberValue}
          <button
            id={idValue}
            onClick={() => {
              deleteNumber(idValue);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteList: PropTypes.func.isRequired,
};

export default ContactList;
