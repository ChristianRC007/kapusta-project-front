import { combineReducers } from 'redux';
import actionTypes from './counter-types';

const date = new Date()
const currenMount = date.getMonth()

const valueReducer = (state = currenMount, { type, payload }) => {

  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});