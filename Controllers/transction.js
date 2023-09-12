const message = "I'm your transaction";

exports.test = (req, res) => {
  res.status(200).json({
    message: message,
  });
};
