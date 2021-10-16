import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const MobileCharts = ({ data }) => {
  const MobileBarLabel = ({ x, y, width, value }) => (
    <text
      x={x + width / 1.1}
      y={y}
      textAnchor="middle"
      fontSize={10}
      dy={-10}
    >{`${value} грн`}</text>
  );

  const MobileCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
        className="chartText"
      >
        <Bar
          dataKey="total"
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
            dataKey="description"
            content={<MobileCategoryLabel />}
            fill="#52555F"
          />
        </Bar>

        <XAxis type="number" hide={true} />
        <YAxis dataKey="description" type="category" scale="band" hide={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileCharts;
