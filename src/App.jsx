import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useRoutes from './hooks/useRoutes';
import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const routes = useRoutes();
  return <>{routes}</>;
}
