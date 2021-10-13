import React from 'react';
import Balance from '../../components/Balance/Balance';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import CounterTabs from '../../components/CounterTabs';

export default function MainPage() {
  return (
    <>
      <BalanceHeader/>
      <CounterTabs />
    </>
  );
}
