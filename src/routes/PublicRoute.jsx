import { Route, Redirect } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect to={{ pathname: '/main' }} />
        ) : (
          <LoginLayout>
            <Component {...props} />
          </LoginLayout>
        )
      }
    />
  );
};

export default PublicRoute;
