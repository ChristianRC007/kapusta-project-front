import useRoutes from './hooks/useRoutes';

export default function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);
  return <>{routes}</>;
}
