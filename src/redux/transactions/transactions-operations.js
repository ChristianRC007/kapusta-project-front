import axios from 'axios';
import transactionsActions from './transactions-actions';

const addIncome = (data, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.addIncomeRequest());

  try {
    await axios.post('api/v1/transactions/addIncome', data);
    dispatch(transactionsActions.addIncomeSuccess());
    onSuccess();
  } catch (error) {
    onError(error);
    dispatch(transactionsActions.addIncomeError(error.message));
  }
};

const addExpense = (data, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.addExpenseRequest());

  try {
    await axios.post('/api/v1/transactions/addExpense', data);
    dispatch(transactionsActions.addExpenseSuccess());
    onSuccess();
  } catch (error) {
    onError(error);
    dispatch(transactionsActions.addExpenseError(error.message));
  }
};

const getExpenseByDate = date => async dispatch => {
  dispatch(transactionsActions.getExpenseByDateRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getExpenseByDate/${date}`,
    );
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseByDateError());
  }
};

const getIncomeByDate = (date, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.getIncomeByDateRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getIncomeByDate/${date}`,
    );
    dispatch(transactionsActions.getIncomeByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeByDateError(error));
  }
};

const deleteTransaction = (id, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch(transactionsActions.deleteTransactionSuccess());
    // onSuccess();
  } catch (error) {
    // onError(error);
    dispatch(transactionsActions.deleteTransactionError(error));
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
