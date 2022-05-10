import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import contactsOperations from '../../../redux/contacts/contactsOperations';
import toast from 'react-hot-toast';

function Form() {
  const dispatch = useDispatch();
  const items = useSelector(contactsSelectors.getAllContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      !items.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      dispatch(contactsOperations.addContact({ name, number }));
      toast.success('New contact is added');
    } else {
      alert(`${name} is already in contacts`);
      toast.error(`${name} is already in contacts`);
    }
    form.reset();
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          {' '}
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          {' '}
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </main>
  );
}

export default Form;
