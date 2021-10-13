import React from "react";
import * as actions from '../../redux/counter/counter-actions';
import { connect } from 'react-redux';
import Controls from "./Controls";

 function MounthAmountsButton({ dataArr, step, onIncrement, onDecrement }) {

  return (
    <div className="month-amount-button">
      <Controls
        dataArr={dataArr}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  )

}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
  dataArr:state.counter.dataArr,
    });
    
const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MounthAmountsButton);
