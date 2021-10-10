import { Route, Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default PrivateRoute;
