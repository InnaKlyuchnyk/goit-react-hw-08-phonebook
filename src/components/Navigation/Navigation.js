import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <div className={styles.box}>
            {' '}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Contacts
            </NavLink>
          </div>

          <div className={styles.box}>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
