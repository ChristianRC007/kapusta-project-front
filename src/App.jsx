import useRoutes from './hooks/useRoutes';

export default function App() {
  const isAuthenticated = false;
  const routes = useRoutes(isAuthenticated);
  return <>{routes}</>;
}
