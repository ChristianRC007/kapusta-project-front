// import axios from 'axios';
import balanceActions from './balance-actions';

const updateBalance = newBalance => async dispatch => {
  try {
    // const updatedBalance = await axios.get() // request which return new balance
    dispatch(balanceActions.updateBalance(newBalance));
  } catch (error) {
    throw new Error(error);
  }
};

const balanceOperations = {
  updateBalance,
};

export default balanceOperations;
