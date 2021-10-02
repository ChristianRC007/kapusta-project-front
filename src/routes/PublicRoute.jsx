import { Route, Redirect } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';

const PublicRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
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
