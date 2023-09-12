const express = require("express");
const mongoose = require("mongoose");
const app = express();
const transactionRoutes = require("./routes/transaction");

mongoose
  .connect("mongodb://0.0.0.0:27017/testAssignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/", transactionRoutes);

module.exports = app;
