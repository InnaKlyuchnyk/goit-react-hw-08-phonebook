import styles from './ContactsListItem.module.css';
import contactsOperations from '../../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

function ContactsListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.listItem}>
      <span className={styles.contactName}>{contact.name}:</span>
      <span>{contact.number}</span>

      <button
        type="button"
        id={contact.id}
        className={styles.button}
        onClick={() => {
          dispatch(contactsOperations.deleteContact(contact.id));
          toast.success(`${contact.name} is deleted`);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactsListItem;
