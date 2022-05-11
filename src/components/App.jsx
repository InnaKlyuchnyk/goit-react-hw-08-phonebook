import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import authOperations from '../redux/auth/authOperations';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import authSelectors from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/* <Route path="/" element={<HomePage />} /> */}

            <Route
              path="/"
              element={
                <PublicRoute navigateTo="/contacts">
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted navigateTo="/contacts">
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted navigateTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
        <Toaster />
      </>
    )
  );
};
