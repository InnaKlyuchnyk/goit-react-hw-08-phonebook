import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './UserMenu.module.css';
import authOperations from '../../redux/auth/authOperations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.box}>
      <span className={styles.userWelcome}>Welcome, {name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
