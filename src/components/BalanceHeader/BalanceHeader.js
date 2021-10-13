import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Balance from '../Balance/Balance';
import MainHeadPannel from '../MainHeadPannel';
import MounthAmountsButton from '../MounthAmountsButton';
import routes from '../../routes/routes';
import reportIcon from '../../images/report-icon.svg';

const BalanceHeader = () => {
  const location = useLocation();

  return (
    <div className="balance-header">
      <MainHeadPannel />
      <Balance />
      {location.pathname === routes.main && (
        <NavLink exact to={routes.report}>
          Перейти к отчетам
          <img src={reportIcon} alt="report link" />
        </NavLink>
      )}
      {location.pathname === routes.report && <MounthAmountsButton />}
    </div>
  );
};

export default BalanceHeader;
