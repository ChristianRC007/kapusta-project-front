import React from 'react';
import Balance from '../../components/Balance/Balance';
import CounterTabs from '../../components/CounterTabs';
import MobileCounterTabs from '../../components/MobileCounterTabs';
import GetLastElements from '../../components/GetLastElements';

export default function MainPage() {
  return (
    <>
      <div className="mobile-main-container">
        <Balance />
        <CounterTabs />
        <GetLastElements />
      </div>
      <MobileCounterTabs />
    </>
  );
}
