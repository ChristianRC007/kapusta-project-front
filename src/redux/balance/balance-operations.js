import balanceServices from '../../services/balanceServices';
import balanceActions from './balance-actions';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

const updateBalance = newBalance => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const updatedBalance = await balanceServices.updateBalance(newBalance);
    dispatch(balanceActions.updateBalance(updatedBalance));
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
      const updatedExpenses = await balanceServices.updatedExpenses(
        year,
        month,
      );
      dispatch(balanceActions.updateCurrentExpenses(updatedExpenses));
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
      const updatedIncomes = await balanceServices.updatedIncomes(year, month);
      dispatch(balanceActions.updateCurrentIncomes(updatedIncomes));
      dispatch(balanceActions.setLoading(false));
    } catch (error) {
      throw new Error(error);
    }
  };

const getBalance = () => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const balance = await balanceServices.getBalance();
    dispatch(balanceActions.getBalance(balance));
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
