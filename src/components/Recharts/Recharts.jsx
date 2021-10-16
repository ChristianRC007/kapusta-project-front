import { useState, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import DesktopCharts from './DesktopChart';
import MobileCharts from './MobileChart';
import { reportsSelectors } from '../../redux/reports';
import { useSelector } from 'react-redux';

const Rechart = () => {
  const [data, setData] = useState([]);
  // const income = useSelector(reportsSelectors.getIncomeDetail);
  const expense = useSelector(reportsSelectors.getExpenseDetail);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const activeCategory = expense?.find(el => el.isActive);

  useEffect(() => {
    if (activeCategory) {
      const { descriptions } = activeCategory;
      setData(descriptions);
    }
  }, [activeCategory]);

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = data
    .reduce((acc, { description, total }) => {
      const myCategory = description;
      const newArr = acc?.find(el => el.description === description);
      if (!newArr) {
        acc.push({ description: myCategory, total });
      }

      if (newArr) {
        const idx = acc.findIndex(el => el.description === description);
        acc[idx].total += total;
      }

      return acc;
    }, [])
    .sort(sortBy('total'));

  const dataChart = newData.length ? newData : [0];

  return isMatches ? (
    <div className="container charts">
      <DesktopCharts data={dataChart} />
    </div>
  ) : (
    <div className="mobileContainer">
      <MobileCharts data={dataChart} />
    </div>
  );
};

export default Rechart;
