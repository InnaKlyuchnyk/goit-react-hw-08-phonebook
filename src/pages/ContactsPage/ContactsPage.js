import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

function ContactsPage() {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  // console.log('isLoadingContacts', isLoadingContacts);

  useEffect(() => {
    function dispatchContacts() {
      dispatch(contactsOperations.fetchContacts());
    }
    dispatchContacts();
  });

  return (
    <main>
      <Form />
      <Filter />
      <ContactsList />
    </main>
  );
}

export default ContactsPage;
