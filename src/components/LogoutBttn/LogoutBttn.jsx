import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function LogoutBttn() {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <>
      <button type="button" onClick={onLogout}>
        ДА
      </button>
    </>
  );
}
