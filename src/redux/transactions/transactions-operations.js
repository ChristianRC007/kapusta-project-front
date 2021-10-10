import axios from 'axios';
import {
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
} from './transactions-actions';

const addIncome = (data, onSuccess, onError) => async dispatch => {
  // dispatch(addIncomeRequest());

  try {
    await axios.post('api/v1/transactions/addIncome', data);
    // dispatch(addIncomeSuccess(data));
    onSuccess();
  } catch (error) {
    onError(error);
    // dispatch(addIncomeError(error.message));
  }
};

const addExpense = (data, onSuccess, onError) => async dispatch => {
  // dispatch(addIncomeRequest());

  try {
    await axios.post('/api/v1/transactions/addExpense', data);
    // dispatch(addIncomeSuccess(data));
    onSuccess();
  } catch (error) {
    onError(error);
    // dispatch(addIncomeError(error.message));
  }
};

const counterOperations = { addIncome, addExpense };
export default counterOperations;
