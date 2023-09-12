const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    deposit: {
      type: Number,
      required: true,
    },
    withdrew: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },

    postBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
