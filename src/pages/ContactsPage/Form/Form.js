import styles from './Form.module.css';
import toast from 'react-hot-toast';
// import {
//   useCreateContactMutation,
//   useGetContactsQuery,
// } from '../../redux/contacts';

function Form() {
  //   const [createContact] = useCreateContactMutation();
  //   const { data } = useGetContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const newContact = { name, phone };

    // if (
    //   !data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    // ) {
    //   createContact(newContact);
    //   toast.success('New contact is added');
    // } else {
    //   toast.error(`${name} is already in contacts`);
    // }
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
