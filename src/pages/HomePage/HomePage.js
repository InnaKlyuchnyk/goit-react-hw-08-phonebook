import styles from './HomePage.module.css';

function HomePage() {
  return (
    <main>
      <div className={styles.homeContent}>
        <p className={styles.message}>Welcom to phonebook!</p>
        <p className={styles.message}>Sing up please or enter your login</p>
      </div>
    </main>
  );
}

export default HomePage;
