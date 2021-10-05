import React from 'react';
import Costs from '../../components/CounterTabs/Costs';
import Profits from '../../components/CounterTabs/Profits';
import CounterTabButtons from '../../components/CounterTabs/CounterTabButtons';
import InputContainer from '../../components/CounterTabs/InputContainer'


export default function MainPage() {
  return (
        <>
      <CounterTabButtons />
      <InputContainer />
        </>       
  );
}

