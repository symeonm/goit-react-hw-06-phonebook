// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';

export function App() {
  // const [filter, setFilter] = useState('');
  // const contact = useSelector(state => state.contact);
  // console.log(contact);
  // useEffect(() => {
  //   const storageContact = localStorage.getItem('contact');
  //   const contactParse = JSON.parse(storageContact);
  //   setContacts(contactParse);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contact', JSON.stringify(contacts));
  // }, [contacts]);

  // const filterContactList = () => {
  //   const normalizedText = filter.toLowerCase();
  //   return contact.filter(obj =>
  //     obj.nameValue.toLowerCase().includes(normalizedText)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
