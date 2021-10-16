import axios from 'axios';

const updateBalance = async newBalance => {
  const { data } = await axios.patch('/api/v1/users/balance', {
    balance: newBalance,
  });

  return data.user.balance;
};

const updatedExpenses = async (year, month) => {
  const { data } = await axios.get('/api/v1/transactions/getExpenseByMonth');

  return data.expenseByMonth.length
    ? data.expenseByMonth.find(
        report => report._id.month === month && report._id.year === year,
      ).total
    : 0;
};

const updatedIncomes = async (year, month) => {
  const { data } = await axios.get('/api/v1/transactions/getIncomeByMonth');

  return data.incomeByMonth.length
    ? data.incomeByMonth.find(
        report => report._id.month === month && report._id.year === year,
      ).total
    : 0;
};

const getBalance = async () => {
  const { data } = await axios.get('/api/v1/users/current');

  return data.user.balance;
};

const balanceServices = {
  updateBalance,
  updatedExpenses,
  updatedIncomes,
  getBalance,
};

export default balanceServices;
