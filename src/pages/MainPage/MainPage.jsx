import React from 'react';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import CounterTabs from '../../components/CounterTabs';
import MobileCounterTabs from '../../components/MobileCounterTabs';
import GetLastElements from '../../components/GetLastElements';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className="mobile-main-container">
        <BalanceHeader />
        <CounterTabs />
        <GetLastElements />
      </div>
      <MobileCounterTabs />
    </>
  );
}
