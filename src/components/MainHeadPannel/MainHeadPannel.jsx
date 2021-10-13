import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import arrowButton from '../../images/arrow-back.svg'
import routes from '../../routes/routes';


export default function MainHeadPannel() {
  const location = useLocation()

  return (
    <div className="main-head-panel">
      {location.pathname === routes.report && (
          <NavLink exact to={routes.main}>
            <img src={arrowButton} alt="" />
            Вернуться на главную
          </NavLink>
      )}
    </div>
  );
}
