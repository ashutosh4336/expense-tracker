import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((el) => el.amount);
  const total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id='balance'>${numberWithCommas(total)}</h1>
    </Fragment>
  );
};

export default Balance;
