import React from 'react';
import { useSelector } from 'react-redux';
import { balanceSelectors } from '../../redux/balance';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
}

const ReportHeader = () => {
  const currentExpenses = useSelector(balanceSelectors.currentExpenses);
  const currentIncomses = useSelector(balanceSelectors.currentIncomses);

  return (
    <div className="report-header">
      <div className="report-header__item">
        <p className="report-header__line">
          Расходы:{' '}
          <span className="report-header__line report-header__line_red">
            - {numberWithCommas(currentExpenses) ?? 0} грн
          </span>
        </p>
      </div>
      <div className="report-header__splitter-line"></div>
      <div className="report-header__item">
        <p className="report-header__line">
          Доходы:{' '}
          <span className="report-header__line report-header__line_green">
            + {numberWithCommas(currentIncomses) ?? 0} грн
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReportHeader;
