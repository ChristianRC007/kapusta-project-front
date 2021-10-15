import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import WestInCome from '../../components/WestInCome';
import { reportsOperations, reportsSelectors } from '../../redux/reports';
import {
  transactionsSelectors,
  transactionsOperations,
} from '../../redux/transactions';
import { format } from 'date-fns';

export default function ReportPage() {
  const dispatch = useDispatch();
  // const selectedDate = useSelector(transactionsSelectors.currentDate);
  const getExpenseDetail = useSelector(reportsSelectors.getExpenseDetail);
  const getIncomeDetail = useSelector(reportsSelectors.getIncomeDetail);
  const IsLoading = useSelector(reportsSelectors.getIsLoading);

  useEffect(() => {
    const date = '2021-10';
    dispatch(reportsOperations.getExpenseDetail(date));
    dispatch(reportsOperations.getIncomeDetail(date));
  }, [dispatch]);

  // console.log(getExpenseDetail);
  // console.log(getIncomeDetail);

  return (
    <>
      <ReportHeader />
      {IsLoading
        ? console.log('Loading')
        : getExpenseDetail.length > 0 && <WestInCome data={getExpenseDetail} />}
    </>
  );
}
