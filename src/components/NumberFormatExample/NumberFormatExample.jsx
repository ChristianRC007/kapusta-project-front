import NumberFormat from 'react-number-format';
//import NumberFormat from '../SvodkaList';
// import styles from './numberFormat.module.scss';

const NumberFormatExample = (props) => {
    return (
      <div>
        {/* <div className={styles.title}>Format Number Input</div> */}
        <NumberFormat
          thousandsGroupStyle="thousand" // lakh   wan
          defaultValue=""
          suffix="" //$
          decimalScale={2}
          type="text" // tel   password
          value={5671259} // item.summ
          prefix=" " //$
          decimalSeparat=""
          displayType="text" // input
          allowNegative={true}
          housandSeparator={' '} // true
          fixedDecimalScale={true}
          allowEmptyFormatting={false}
        />
      </div>
    );
};

export default NumberFormatExample;

