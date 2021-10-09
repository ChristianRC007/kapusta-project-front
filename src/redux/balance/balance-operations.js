import axios from 'axios';
import balanceActions from './balance-actions';

const BASE_URL = `https://kapusta-app-api.herokuapp.com/api/v1/`;

//temporary test authorization header
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE5YWEwYWIwZjA3NGE1NDI1ZTA0ZSIsImlhdCI6MTYzMzc4NjU4NX0.yZWCwoDhjvhyBQIWFO9obkIHQO05N9MaG_Ak0V5exnQ';

//operation for get balance on start
const getBalance = () => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const user = await axios.get(`${BASE_URL}users/current`);
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
    const updatedBalance = await axios.patch(`${BASE_URL}users/balance`, {
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