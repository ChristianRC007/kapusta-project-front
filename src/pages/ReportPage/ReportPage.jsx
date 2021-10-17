import React, { useEffect } from 'react';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import Rechart from '../../components/Recharts';
import ButtonChangeCategories from '../../components/WestInCome/ButtonChangeCategories';
import { useDispatch, useSelector } from 'react-redux';
import {
  reportsOperations,
  reportsSelectors,
  reportsActions,
} from '../../redux/reports';
import ReportsList from '../../components/Reports/ReportsList';
import st from '../../components/Reports/ReportsList.module.scss';
import { format } from 'date-fns';

export default function ReportPage() {
  const dispatch = useDispatch();
  const costs = useSelector(reportsSelectors.getCosts);
  const getExpenseDetail = useSelector(reportsSelectors.getExpenseDetail);
  const getIncomeDetail = useSelector(reportsSelectors.getIncomeDetail);

  useEffect(() => {
    const formatDate = format(new Date(), 'yyyy-MM');
    dispatch(reportsOperations.getExpenseDetail(formatDate));
    dispatch(reportsOperations.getIncomeDetail(formatDate));
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

  const handleClickExpense = category => {
    const expanse = setActiveCategory(getExpenseDetail, category);
    dispatch(reportsActions.setActiveExpanse(expanse));
  };

  const handleClickIncome = category => {
    const income = setActiveCategory(getIncomeDetail, category);
    dispatch(reportsActions.setActiveIncome(income));
  };

  return (
    <>
      <BalanceHeader />
      <ReportHeader />
      <div className={st.wrapper}>
        <ButtonChangeCategories />
        {costs ? (
          <ReportsList
            transactions={getExpenseDetail}
            onClick={handleClickExpense}
          />
        ) : (
          <ReportsList
            transactions={getIncomeDetail}
            onClick={handleClickIncome}
          />
        )}
      </div>
      <Rechart />
    </>
  );
}
