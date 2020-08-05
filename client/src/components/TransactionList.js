import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list' id='list'>
        {transactions.map((el) => (
          <Transaction key={el.id} transaction={el} />
        ))}
      </ul>
    </Fragment>
  );
};
export default TransactionList;
