import React from 'react';
import * as actions from '../../redux/counter/counter-actions';
import { connect } from 'react-redux';
import Controls from './Controls';
import { useDispatch, useSelector } from 'react-redux';
import { reportsOperations, reportsSelectors } from '../../redux/reports';

function MounthAmountsButton({
  dataArr,
  step,
  onIncrement,
  onDecrement,
  value,
}) {
  const dispatch = useDispatch();
  const costs = useSelector(reportsSelectors.getCosts);
  // dispatch(reportsOperations.getExpenseDetail()); //costs
  // dispatch(reportsOperations.getIncomeDetail()); //!costs
  // console.log(dataArr);
  const newIncrementValue =
    (value >= 0) & (value < 11) ? value + 2 : value === 11 ? 1 : value;
  const newDecrementValue = value === 0 ? 12 : value;

  const increment = () => {
    if (costs) {
      dispatch(
        reportsOperations.getExpenseDetail(
          `${dataArr[1]}-${newIncrementValue}`,
        ),
      );
    }
    if (!costs) {
      dispatch(
        reportsOperations.getExpenseDetail(
          `${dataArr[1]}-${newIncrementValue}`,
        ),
      );
    }
  };

  const decrement = () => {
    if (costs) {
      dispatch(
        reportsOperations.getExpenseDetail(
          `${dataArr[1]}-${newDecrementValue}`,
        ),
      );
    }
    if (!costs) {
      dispatch(
        reportsOperations.getExpenseDetail(
          `${dataArr[1]}-${newDecrementValue}`,
        ),
      );
    }
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
