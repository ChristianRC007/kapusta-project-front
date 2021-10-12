import React from 'react';
import CounterTabs from '../../components/CounterTabs';
import MobileCounterTabs from '../../components/MobileCounterTabs';

export default function MainPage() {
  return (
    <>
      <CounterTabs />
      <MobileCounterTabs />
    </>
  );
}
