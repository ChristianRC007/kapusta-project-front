import React, { useEffect } from 'react';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import WestInCome from '../../components/WestInCome';
import Rechart from '../../components/Recharts';
import { useDispatch, useSelector } from 'react-redux';
import { reportsOperations, reportsSelectors } from '../../redux/reports';

import { format } from 'date-fns';

export default function ReportPage() {
  const dispatch = useDispatch();
  const costs = useSelector(reportsSelectors.getCosts);
  const getExpenseDetail = useSelector(reportsSelectors.getExpenseDetail);
  const getIncomeDetail = useSelector(reportsSelectors.getIncomeDetail);

  useEffect(() => {
    const formatDate = format(new Date(), 'yyyy-MM');
    dispatch(reportsOperations.getExpenseDetail(formatDate)); //costs
    dispatch(reportsOperations.getIncomeDetail(formatDate)); //!costs
  }, [dispatch]);

  return (
    <>
      <BalanceHeader />
      <ReportHeader />
      <WestInCome data={costs ? getExpenseDetail : !costs && getIncomeDetail} />
      <Rechart />
    </>
  );
}
