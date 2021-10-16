import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import WestInCome from '../../components/WestInCome';
import { reportsOperations, reportsSelectors } from '../../redux/reports';

export default function ReportPage() {
  const dispatch = useDispatch();
  const Costs = useSelector(reportsSelectors.getCosts);
  const getExpenseDetail = useSelector(reportsSelectors.getExpenseDetail);
  const getIncomeDetail = useSelector(reportsSelectors.getIncomeDetail);
  const IsLoading = useSelector(reportsSelectors.getIsLoading);

  useEffect(() => {
    const date = '2021-10';
    dispatch(reportsOperations.getExpenseDetail(date)); //costs
    dispatch(reportsOperations.getIncomeDetail(date)); //!costs
  }, [dispatch]);

  // console.log(getExpenseDetail);
  // console.log(getIncomeDetail);

  return (
    <>
      <ReportHeader />
      {IsLoading ? (
        console.log('Loading')
      ) : (
        <WestInCome
          data={Costs ? getExpenseDetail : !Costs && getIncomeDetail}
        />
      )}
    </>
  );
}
