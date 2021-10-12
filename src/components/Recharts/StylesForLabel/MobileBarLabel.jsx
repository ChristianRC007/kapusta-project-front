const MobileBarLabel = ({ x, y, width, value }) => (
  <text
    x={x + width / 1.11}
    y={y}
    textAnchor="middle"
    dy={-10}
  >{`${value} грн`}</text>
);

export default MobileBarLabel;
