import React from 'react';
import * as actions from '../../redux/counter/counter-actions';
import { connect } from 'react-redux';
import Controls from './Controls';
import { useDispatch } from 'react-redux';
import { reportsOperations } from '../../redux/reports';

function MounthAmountsButton({
  dataArr,
  step,
  onIncrement,
  onDecrement,
  value,
}) {
  const dispatch = useDispatch();
  const newIncrementValue =
    (value >= 0) & (value < 11) ? value + 2 : value === 11 ? 1 : value;
  const newDecrementValue = value === 0 ? 12 : value;

  const increment = () => {
    dispatch(
      reportsOperations.getExpenseDetail(`${dataArr[1]}-${newIncrementValue}`),
    );
    dispatch(
      reportsOperations.getIncomeDetail(`${dataArr[1]}-${newIncrementValue}`),
    );
  };

  const decrement = () => {
    dispatch(
      reportsOperations.getExpenseDetail(`${dataArr[1]}-${newDecrementValue}`),
    );
    dispatch(
      reportsOperations.getIncomeDetail(`${dataArr[1]}-${newDecrementValue}`),
    );
  };
  return (
    <div className="month-amount-button">
      <Controls
        dataArr={dataArr}
        onIncrement={() => {
          onIncrement(step);
          increment();
        }}
        onDecrement={() => {
          onDecrement(step);
          decrement();
        }}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
  dataArr: state.counter.dataArr,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MounthAmountsButton);
