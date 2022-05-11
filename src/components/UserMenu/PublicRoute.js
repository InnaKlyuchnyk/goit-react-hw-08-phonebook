import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

function PublicRoute({ children, restricted = false, navigateTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}

export default PublicRoute;
