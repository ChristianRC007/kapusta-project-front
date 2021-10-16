import React, { useEffect } from 'react';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
// import WestInCome from '../../components/WestInCome';
import Rechart from '../../components/Recharts';
import { useDispatch, useSelector } from 'react-redux';
import {
  reportsOperations,
  reportsSelectors,
  reportsActions,
} from '../../redux/reports';
import ReportsList from '../../components/Reports/ReportsList';

import { format } from 'date-fns';

export default function ReportPage() {
  const dispatch = useDispatch();
  // const costs = useSelector(reportsSelectors.getCosts);
  const getExpenseDetail = useSelector(reportsSelectors.getExpenseDetail);
  // const getIncomeDetail = useSelector(reportsSelectors.getIncomeDetail);

  useEffect(() => {
    const formatDate = format(new Date(), 'yyyy-MM');
    dispatch(reportsOperations.getExpenseDetail(formatDate)); //costs
    dispatch(reportsOperations.getIncomeDetail(formatDate)); //!costs
  }, [dispatch]);

  const setActiveCategory = (arr, category) => {
    const array = arr?.map(el => {
      if (el.isActive) {
        return { ...el, isActive: !el.isActive };
      }

      if (el._id === category) {
        return { ...el, isActive: !el.isActive };
      }
      return el;
    });

    return array;
  };

  const handleClick = category => {
    const expanse = setActiveCategory(getExpenseDetail, category);
    dispatch(reportsActions.setActiveExpanse(expanse));
  };

  return (
    <>
      <BalanceHeader />
      <ReportHeader />
      <ReportsList transactions={getExpenseDetail} onClick={handleClick} />
      {/* <WestInCome data={costs ? getExpenseDetail : !costs && getIncomeDetail} /> */}
      <Rechart />
    </>
  );
}
