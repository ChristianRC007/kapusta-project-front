import React from 'react';
import ReportHeader from '../../components/ReportHeader/ReportHeader';
import BalanceHeader from '../../components/BalanceHeader/BalanceHeader';
import WestInCome from '../../components/WestInCome';

export default function ReportPage() {
  return (
    <>
      <BalanceHeader/>
      <ReportHeader />
      <WestInCome/>
    </>
  );
}
