import React from 'react';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import CounterTabs from '../../components/CounterTabs';
import MobileCounterTabs from '../../components/MobileCounterTabs';
import GetLastElements from '../../components/GetLastElements';

export default function MainPage() {
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
