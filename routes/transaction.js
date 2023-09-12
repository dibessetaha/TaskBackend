const express = require("express");
const router = express.Router();
const transactionCtrl = require("../Controllers/transction");

router.get("/api", transactionCtrl.test);

module.exports = router;
