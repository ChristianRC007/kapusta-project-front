import React from 'react';
import NumberFormat from 'react-number-format';
import { transactionsSelectors } from '../../redux/transactions';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  summaryOperations,
  summarySelectors,
} from '../../redux/transactionSummary';

export default function Summary({ profits }) {
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getTransactions);
  const expanse = useSelector(summarySelectors.getExpanseBySixMonth);
  const income = useSelector(summarySelectors.getIncomeBySixMonth);

  const items = profits ? income : expanse;

  useEffect(() => {
    if (profits) {
      dispatch(summaryOperations.getIncomeByMonth());
      return;
    }
    dispatch(summaryOperations.getExpenseByMonth());
    return () => dispatch;
  }, [dispatch, profits, transactions]);

  return (
    <div className="summary__wrapper">
      <p className="summary__title">СВОДКА</p>
      <ul className="summary__list">
        {items.map(item => (
          <li className="summary__item" key={`${item.id}`}>
            <span className="field-month">{item.month.toUpperCase()}</span>
            <span className="field-summ">
              <NumberFormat
                thousandsGroupStyle="thousand"
                decimalScale={2}
                type="text"
                value={item.total}
                displayType="text"
                allowNegative={true}
                thousandSeparator={' '}
                fixedDecimalScale={true}
                allowEmptyFormatting={false}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
