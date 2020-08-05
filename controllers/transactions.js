const Transaction = require('../models/Transaction');

// @desc        Get all Transactions
// @route       GET /api/v1/transactions
// access       Public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res
      .status(200)
      .json({ code: 200, count: transactions.length, data: transactions });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ code: 500, data: 'Something Went Wrong' });
  }
};

// @desc        Add a Transaction
// @route       POST /api/v1/transactions
// access       Public

exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const createTransaction = {
      text,
      amount,
    };
    const transaction = await Transaction.create(createTransaction);
    return res.status(201).json({ code: 201, data: transaction });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((el) => el.message);
      res.status(400).json({ code: 400, error: messages });
    } else {
      return res.status(500).json({ code: 500, msg: 'Something went wrong' });
    }
  }
};

// @desc        Delete all Transactions
// @route       delete /api/v1/transactions/:id
// access       Public

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ code: 404, error: 'Resource Found' });
    }

    await transaction.remove();
    return res.status(200).json({ code: 200, data: {} });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ code: 500, msg: 'Something went wrong' });
  }
};
