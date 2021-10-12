import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import { MobileBarLabel, MobileCategoryLabel } from './StylesForLabel';

const MobileCharts = ({ data }) => (
  <ResponsiveContainer width="100%" height={500}>
    <BarChart
      layout="vertical"
      data={data}
      margin={{ top: 20, right: 0, bottom: 30, left: 0 }}
      className="chartText"
    >
      <Bar
        dataKey="amount"
        barSize={18}
        radius={[0, 10, 10, 0]}
        label={<MobileBarLabel />}
        fill="#52555f"
        minPointSize={80}
      >
        {data.map((el, idx) => (
          <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
        ))}
        <LabelList
          dataKey="category"
          content={<MobileCategoryLabel />}
          fill="#52555F"
        />
      </Bar>

      <XAxis type="number" hide={true} />
      <YAxis dataKey="category" type="category" scale="band" hide={true} />
    </BarChart>
  </ResponsiveContainer>
);

export default MobileCharts;
