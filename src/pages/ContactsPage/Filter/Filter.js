import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import contactsOperations from '../../../redux/contacts/contactsOperations';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const value = event.currentTarget.value;
    dispatch(contactsOperations.filter(value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}
