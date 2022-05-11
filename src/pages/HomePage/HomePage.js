import styles from './HomePage.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <main>
      <div className={styles.homeContent}>
        <p className={styles.message}>Welcom to phonebook!</p>
        {!isLoggedIn && (
          <p className={styles.message}>Sing up or enter your login</p>
        )}
      </div>
    </main>
  );
}

export default HomePage;
