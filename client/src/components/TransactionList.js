import React, { Fragment, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(transactions);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list' id='list'>
        {transactions.map((el) => (
          <Transaction key={el._id} transaction={el} />
        ))}
      </ul>
    </Fragment>
  );
};
export default TransactionList;
