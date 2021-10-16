import { Route, Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import GlobalLoader from '../components/GlobalLoader/GlobalLoader';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return <GlobalLoader />;
        }
        if (isAuthenticated) {
          return (
            <MainLayout>
              <Component {...props} />
            </MainLayout>
          );
        } else {
          return <Redirect to={{ pathname: '/login' }} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
