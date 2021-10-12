import React from 'react';
import MobileCounterTabs from '../../components/MobileCounterTabs';
import GetLastElements from '../../components/GetLastElements';

export default function ReportPage() {
  return (
    <div>
      Report
      <GetLastElements />
      <MobileCounterTabs />
    </div>
  );
}
