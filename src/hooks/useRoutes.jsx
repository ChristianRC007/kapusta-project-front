import { Switch, Redirect, Route } from 'react-router-dom';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import StatisticPage from '../pages/ReportPage';

export default function useRoutes(isUserAuthenticated) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return isUserAuthenticated ? (
            <Redirect to="/main" />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <PublicRoute
        exact
        path="/login"
        component={LoginPage}
        isAuth={isUserAuthenticated}
      />
      <PrivateRoute
        path="/main"
        component={MainPage}
        isAuth={isUserAuthenticated}
      />
      <PrivateRoute
        path="/report"
        component={StatisticPage}
        isAuth={isUserAuthenticated}
      />
      <Redirect to="/login" />
    </Switch>
  );
}
