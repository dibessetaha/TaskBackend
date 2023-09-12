const express = require("express");
const router = express.Router();
const transactionCtrl = require("../Controllers/transction");

router.get("/transactions", transactionCtrl.getAllTransactions);
router.get("/transactionPeriod", transactionCtrl.filterTransaction);
/* 
  decomment this instruction bellow if you want to add some new transaction
*/
// router.post("/transactions", transactionCtrl.postTransaction);

module.exports = router;
