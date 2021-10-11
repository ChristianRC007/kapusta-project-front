import axios from 'axios';
import transactionsActions from './transactions-actions';

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

const getExpenseByDate = (date, onSuccess, onError) => async dispatch => {
  // dispatch(addIncomeRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getExpenseByDate/${date}`,
    );
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
    // onSuccess();
  } catch (error) {
    // onError(error);
    console.log(error);
    // dispatch(addIncomeError(error.message));
  }
};

const counterOperations = { addIncome, addExpense, getExpenseByDate };
export default counterOperations;
