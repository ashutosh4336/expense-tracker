import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid.v4(),
      text,
      amount: +amount,
    };
    // console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter Your Text...'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount...'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};
export default AddTransaction;
