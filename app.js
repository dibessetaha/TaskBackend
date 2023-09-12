const express = require("express");
const mongoose = require("mongoose");
const app = express();
const transactionRoutes = require("./routes/transaction");

app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/testAssignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => console.log(e));

app.use("/api", transactionRoutes);

module.exports = app;
