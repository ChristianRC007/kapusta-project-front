import axios from 'axios';
import balanceActions from './balance-actions';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

//operation for update balance
const updateBalance = newBalance => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const updatedBalance = await axios.patch('/api/v1/users/balance', {
      balance: newBalance,
    });
    dispatch(balanceActions.updateBalance(updatedBalance.data.user.balance));
    dispatch(balanceActions.setLoading(false));
  } catch (error) {
    throw new Error(error);
  }
};

const updateCurrentExpenses =
  (year = currentYear, month = currentMonth) =>
  async dispatch => {
    try {
      dispatch(balanceActions.setLoading(true));
      const updatedExpenses = await axios.get(
        '/api/v1/transactions/getExpenseByMonth',
      );
      dispatch(
        balanceActions.updateCurrentExpenses(
          updatedExpenses.data.expenseByMonth.length
            ? updatedExpenses.data.expenseByMonth.find(
                report =>
                  report._id.month === month && report._id.year === year,
              ).total
            : 0,
        ),
      );
      dispatch(balanceActions.setLoading(false));
    } catch (error) {
      throw new Error(error);
    }
  };

const updateCurrentIncomes =
  (year = currentYear, month = currentMonth) =>
  async dispatch => {
    try {
      dispatch(balanceActions.setLoading(true));
      const updatedIncomes = await axios.get(
        '/api/v1/transactions/getIncomeByMonth',
      );
      dispatch(
        balanceActions.updateCurrentIncomes(
          updatedIncomes.data.incomeByMonth.length
            ? updatedIncomes.data.incomeByMonth.find(
                report =>
                  report._id.month === month && report._id.year === year,
              ).total
            : 0,
        ),
      );
      dispatch(balanceActions.setLoading(false));
    } catch (error) {
      throw new Error(error);
    }
  };

//operation for get balance on start
const getBalance = () => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const user = await axios.get('/api/v1/users/current');
    dispatch(balanceActions.getBalance(user.data.user.balance));
    dispatch(balanceActions.setLoading(false));
  } catch (error) {
    throw new Error(error);
  }
};

const balanceOperations = {
  updateBalance,
  getBalance,
  updateCurrentExpenses,
  updateCurrentIncomes,
};

export default balanceOperations;
