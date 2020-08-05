const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a Title'],
    trim: true,
  },

  amount: {
    type: Number,
    required: [true, 'Please add a Positive or Negative amount'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
