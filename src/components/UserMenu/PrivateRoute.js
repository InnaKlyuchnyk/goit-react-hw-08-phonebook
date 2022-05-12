import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

function PrivateRoute({ children, navigateTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

export default PrivateRoute;
