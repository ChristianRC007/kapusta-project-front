import { combineReducers } from 'redux';
import actionTypes from './counter-types';

let date = new Date();
let currentYear = date.getFullYear();
const currenMount = date.getMonth();
let userMount = currenMount;

const valueReducer = (state = currenMount, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      currentYear = state + payload >= 12 ? currentYear + 1 : currentYear;
      userMount = state + payload >= 12 ? (state = 0) : state + payload;
      return userMount;

    case actionTypes.DECREMENT:
      currentYear =
        state - payload <= -1 ? (currentYear = currentYear - 1) : currentYear;
      userMount = state - payload <= -1 ? (state = 11) : state - payload;
      return userMount;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

const dataArrCustomReducer = () => {
  const mounthArr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  let template = [];
  template.push(mounthArr[userMount], currentYear);
  return template;
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
  dataArr: dataArrCustomReducer,
});
