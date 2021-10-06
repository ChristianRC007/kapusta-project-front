import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainHeadPannel() {
  return (
    <div>
      Balance pannel
      <NavLink exact to="/report">
        Перейти к отчетам
      </NavLink>
    </div>
  );
}
