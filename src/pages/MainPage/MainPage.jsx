import React from 'react';
import Costs from '../../components/MainPage/Costs';
import Profits from '../../components/MainPage/Profits';

export default function MainPage() {
  return (
        <div className="container">
          <Costs />
          <Profits />
        </div>       
  );
}

