import React from 'react';
import NumberFormat from 'react-number-format';

const items = [
  { id: '6', month: 'ИЮНЬ', summ: 18000.0 },
  { id: '5', month: 'июль', summ: 15000.0 },
  { id: '4', month: 'АВГУСТ', summ: 30000.0 },
  { id: '3', month: 'СЕНТЯБРЬ', summ: 30000.0 },
  { id: '2', month: 'ОКТЯБРЬ', summ: 10000.0 },
  { id: '1', month: 'НОЯБРЬ', summ: 10000.0 },
];

export default function Summary() {
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
                value={item.summ}
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
