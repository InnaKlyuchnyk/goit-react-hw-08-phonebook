import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="text"
            name="email"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="text"
            name="password"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
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
