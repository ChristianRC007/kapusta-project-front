import { Switch, Redirect, Route } from 'react-router-dom';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import ReportPage from '../pages/ReportPage';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function useRoutes() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return isAuthenticated ? (
            <Redirect to="/main" />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <PublicRoute exact path="/login" component={LoginPage} />
      <PrivateRoute path="/main" component={MainPage} />
      <PrivateRoute path="/report" component={ReportPage} />
      <Redirect to="/login" />
    </Switch>
  );
}
