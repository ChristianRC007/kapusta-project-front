import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Balance from '../Balance/Balance';
import MainHeadPannel from '../MainHeadPannel';
import MounthAmountsButton from '../MounthAmountsButton';
import routes from '../../routes/routes';
import reportIcon from '../../images/report-icon.svg';
import BalanceDatepicker from '../BalanceDatepicker/BalanceDatepicker';

const BalanceHeader = () => {
  const location = useLocation();

  return (
    <div
      className={`balance-header  ${
        location.pathname === routes.report && 'report'
      }`}
    >
      <MainHeadPannel />
      <Balance />
      {location.pathname === routes.main && (
        <div>
          <NavLink exact to={routes.report}>
            <span>Перейти к отчетам</span>
            <img src={reportIcon} alt="report link" />
          </NavLink>
        </div>
      )}
      {location.pathname === routes.report && <BalanceDatepicker />}
    </div>
  );
};

export default BalanceHeader;
