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
  dispatch(transactionsActions.getExpenseByDateRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getExpenseByDate/${date}`,
    );
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
    // onSuccess();
  } catch (error) {
    // onError(error);
    dispatch(transactionsActions.getExpenseByDateError());
    // console.log(error);
    // dispatch(addIncomeError(error.message));
  }
};

const getIncomeByDate = (date, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.getIncomeByDateRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getIncomeByDate/${date}`,
    );
    dispatch(transactionsActions.getIncomeByDateSuccess(data));
    // onSuccess();
  } catch (error) {
    // onError(error);
    dispatch(transactionsActions.getIncomeByDateError(error));
    // console.log(error);
    // dispatch(addIncomeError(error.message));
  }
};

const deleteTransaction = (id, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    // onSuccess();
  } catch (error) {
    // onError(error);
    dispatch(transactionsActions.deleteTransactionError(error));
    // console.log(error);
    // dispatch(addIncomeError(error.message));
  }
};

const counterOperations = {
  addIncome,
  addExpense,
  getExpenseByDate,
  getIncomeByDate,
  deleteTransaction,
};
export default counterOperations;
