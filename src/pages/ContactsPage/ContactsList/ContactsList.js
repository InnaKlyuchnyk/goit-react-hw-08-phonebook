import styles from './ContactsList.module.css';
import ContactsListItem from '../ContactsListItem';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';

function ContactsList() {
  const items = useSelector(contactsSelectors.getAllContacts);
  const filterValue = useSelector(contactsSelectors.getFilter);

  const getFilteredNames = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <ul className={styles.list}>
      {getFilteredNames().map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactsList;
