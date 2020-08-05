const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Dotenv
dotenv.config({ path: './config/config.env' });

// MongoDB file
const connectDB = require('./config/db');
// connect to DB
connectDB();

// Import Routes
const transactions = require('./routes/transactions');

const app = express();

// CORS
app.use(cors());

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body Parser
app.use(express.json());

// Mount Routes
app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(
    `Server Started in port ${PORT} on ${process.env.NODE_ENV} mode`.yellow.bold
  )
);

// Handle Unhandled Rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close Server and Exit
  server.close(() => process.exit(1));
});
