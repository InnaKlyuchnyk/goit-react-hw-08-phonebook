import styles from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    event.currentTarget.reset();
  };

  return (
    <main className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="text"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
