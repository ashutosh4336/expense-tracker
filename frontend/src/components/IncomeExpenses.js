import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((el) => el.amount);

  const income = amounts
    .filter((el) => el > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((a, b) => a + b, 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus' id='money-plus'>
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus' id='money-minus'>
          +${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
