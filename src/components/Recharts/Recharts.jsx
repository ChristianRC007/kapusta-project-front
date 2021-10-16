import { useMediaQuery } from '../../hooks/useMediaQuery';

import DesktopCharts from './DesktopChart';
import MobileCharts from './MobileChart';
import { reportsSelectors } from '../../redux/reports';
import { useSelector } from 'react-redux';

const data = [
  {
    category: "Гов'ядина",
    amount: 398,
  },
  {
    category: "Гов'ядина",
    amount: 398,
  },
  {
    category: "Гов'ядина",
    amount: 398,
  },

  {
    category: 'гречка',
    amount: 980,
  },
  {
    category: 'макарони',
    amount: 191,
  },
  {
    category: 'рис',
    amount: 198,
  },
  {
    category: 'рис',
    amount: 198,
  },
  {
    category: 'зелень',
    amount: 918,
  },
  {
    category: 'зелень',
    amount: 158,
  },
  {
    category: 'прмідори',
    amount: 198,
  },

  {
    category: 'фрукти',
    amount: 398,
  },
];

const Rechart = () => {
  const income = useSelector(reportsSelectors.getIncomeDetail);
  const expense = useSelector(reportsSelectors.getExpenseDetail);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = data
    .reduce((acc, { category, amount }) => {
      const myCategory = category;
      const newArr = acc?.find(el => el.category === category);
      if (!newArr) {
        acc.push({ category: myCategory, amount });
      }

      if (newArr) {
        const idx = acc.findIndex(el => el.category === category);
        acc[idx].amount += amount;
      }

      return acc;
    }, [])
    .sort(sortBy('amount'));

  const dataChart = newData.length ? newData : [0];
  console.log(dataChart);

  return isMatches ? (
    <div className="container charts">
      <DesktopCharts data={expense[0].descriptions} />
    </div>
  ) : (
    <div className="mobileContainer">
      <MobileCharts data={dataChart} />
    </div>
  );
};

export default Rechart;
