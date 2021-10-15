import axios from 'axios';
import summaryActions from './summary-actions';

const getExpenseByMonth = () => async dispatch => {
  dispatch(summaryActions.getExpanseSummaryRequest());

  try {
    const { data } = await axios.get('/api/v1/transactions/getExpenseByMonth');
    dispatch(summaryActions.getExpanseSummarySuccess(data));
  } catch (error) {
    dispatch(summaryActions.getExpanseSummaryError(error.message));
  }
};

const getIncomeByMonth = () => async dispatch => {
  dispatch(summaryActions.getIncomeSummaryRequest());

  try {
    const { data } = await axios.get('/api/v1/transactions/getIncomeByMonth');
    dispatch(summaryActions.getIncomeSummarySuccess(data));
  } catch (error) {
    dispatch(summaryActions.getIncomeSummaryError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getExpenseByMonth,
  getIncomeByMonth,
};
