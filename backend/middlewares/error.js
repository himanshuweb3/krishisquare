const AppError = require("../utils/AppError");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.message = err.message || "Internal Server Error!";
  // CastError - Invalid ID
  if (err.name === "CastError") {
    const message = `Resource not found! Invalid ${err.path}`;
    err = new AppError(message, 400);
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new AppError(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `JWT is invalid, please try again.`;
    err = new AppError(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpiredError") {
    const message = `JWT is expired, please try again.`;
    err = new AppError(message, 400);
  }
  res.status(err.statusCode).json({
    status: err.status,
    err: err.message,
  });
};
