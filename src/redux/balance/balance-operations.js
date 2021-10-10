import axios from 'axios';
import balanceActions from './balance-actions';

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

const balanceOperations = {
  updateBalance,
  getBalance,
};

export default balanceOperations;
