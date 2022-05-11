import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const items = useSelector(contactsSelectors.getAllContacts);

  useEffect(() => {
    function dispatchContacts() {
      dispatch(contactsOperations.fetchContacts());
    }
    dispatchContacts();
  });

  return (
    <main>
      <Form />
      {items.length !== 0 && <Filter />}
      <ContactsList />
    </main>
  );
}

export default ContactsPage;
