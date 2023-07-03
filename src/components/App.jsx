
import { useSelector } from 'react-redux';

import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import styles from './App.module.css';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={styles.Layout}>
      <h1 className={styles.titleContacts}>Phonebook</h1>
      <ContactForm />
      <div className={styles.allContacts}>All contacts: {contacts.length}</div>
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};
