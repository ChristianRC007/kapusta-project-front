import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import styles from './svodkaList.module.scss';

const SvodkaList = ({ items, }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
          <li className={styles.item} key={`${item.id}`}>
          {/* : <li className={styles.itembottom} key={`${item.id}`}> */}
        
          <span className={styles.field_month}>{item.month.toUpperCase()}</span>
          <span className={styles.field_summ}>
            <NumberFormat
              thousandsGroupStyle="thousand"
              defaultValue=""
              suffix=""
              decimalScale={2}
              type="text"
              value={item.summ} /* {item.summ} */
              prefix=" "
              decimalSeparat=""
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
  );
};

SvodkaList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      summ: PropTypes.number.isRequired,
    }),
  ),
};

export default SvodkaList;
