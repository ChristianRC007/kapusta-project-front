import React from 'react';
import Balance from '../../components/Balance/Balance';
import CounterTabs from '../../components/CounterTabs';

export default function MainPage({isAuth}) {
  // console.log(props.isAuth)
  return (
    <> 
    {isAuth && <Balance/>}
      <CounterTabs />
     
    </>
  );
}
