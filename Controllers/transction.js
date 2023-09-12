const Transaction = require("../models/transaction.model");
const moment = require("moment");
exports.getAllTransactions = async (req, res) => {
  Transaction.find()
    .then((transactions) => res.status(200).json(transactions))
    .catch((error) => res.status(400).json(error));
};

exports.filterTransaction = async (req, res) => {
  const { period } = req.body;
  let startDate, endDate;

  switch (period) {
    case 1:
      startDate = moment().subtract(30, "days").toDate();
      endDate = new Date();
      break;

    case 2:
      startDate = moment().subtract(60, "days").toDate();
      endDate = new Date();
      break;

    case 3:
      startDate = moment().subtract(90, "days").toDate();
      endDate = new Date();
      break;

    case 4:
      startDate = moment().subtract(180, "days").toDate();
      endDate = new Date();
      break;

    case 5:
      startDate = moment().subtract(365, "days").toDate();
      endDate = new Date();
      break;

    case 6:
      this.getAllTransactions(req, res);
      break;

    default:
      res.status(400).send("Invalid date range");
      return;
  }
  // Build query
  const query = {
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  };

  try {
    const transactions = await Transaction.find(query).exec();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* 
  decomment this block of code if you want to add some new transaction
*/
// exports.postTransaction = async (req, res) => {
//   const { deposit, withdrew, date, company, postBy } = req.body;

//   const transaction = new Transaction({
//     deposit,
//     withdrew,
//     date,
//     company,
//     postBy,
//   });

//   transaction
//     .save()
//     .then((transaction) => {
//       res.status(200).json(transaction);
//     })
//     .catch((error) => {
//       res.status(400).json(error);
//     });
// };

exports.getTransactionPerPeriod = (res, req) => {};
