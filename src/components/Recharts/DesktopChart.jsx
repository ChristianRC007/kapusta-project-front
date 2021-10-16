import { BarChart, Bar, Cell, XAxis } from 'recharts';

const DesktopCharts = ({ data }) => {
  const renderCustomizedLabel = props => {
    const { x, y, width, value } = props;

    return (
      <text
        x={x + width / 2}
        y={y}
        dy={-10}
        textAnchor="middle"
        fontSize={12}
      >{`${value}грн`}</text>
    );
  };

  return (
    <div className="chartWrapper">
      <BarChart
        data={data}
        width={666}
        height={422}
        margin={{ top: 40, right: 15, bottom: 20, left: 15 }}
        className="chartText"
      >
        <Bar
          dataKey="total"
          radius={[10, 10, 0, 0]}
          barSize={38}
          label={renderCustomizedLabel}
        >
          {data?.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
        </Bar>
        <XAxis dataKey="description" axisLine={false} tickLine={false} />
      </BarChart>
    </div>
  );
};

export default DesktopCharts;
