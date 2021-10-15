import axios from 'axios';
import reportsActions from './reports-actions';

const getIncomeDetail = date => async dispatch => {
  dispatch(reportsActions.getIncomeDetailRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getIncomeDetail/${date}`,
    );
    dispatch(reportsActions.getIncomeDetailSuccess(data));
  } catch (error) {
    dispatch(reportsActions.getIncomeDetailError());
  }
};

const getExpenseDetail = date => async dispatch => {
  dispatch(reportsActions.getExpenseDetailRequest());

  try {
    const { data } = await axios.get(
      `/api/v1/transactions/getExpenseDetail/${date}`,
    );
    dispatch(reportsActions.getExpenseDetailSuccess(data));
  } catch (error) {
    dispatch(reportsActions.getExpenseDetailError(error));
  }
};

const reportsOperations = {
  getIncomeDetail,
  getExpenseDetail,
};

export default reportsOperations;
