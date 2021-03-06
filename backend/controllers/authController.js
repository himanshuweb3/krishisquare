const catchAsync = require("../middlewares/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/AppError.js");
const jwt = require("jsonwebtoken");
const { createSendToken } = require("../utils/jwtToken.js");

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, identity, mobile, town, GST, address, pin } =
    req.body;

  const user = await User.create({
    name,
    email,
    password,
    identity,
    mobile,
    town,
    GST,
    address,
    pin,
  });
  createSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePasswords(password, user.password))) {
    return next(new AppError("Invalid email or password", 401));
  }

  createSendToken(user, 200, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully!",
  });
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(
      new AppError("Please login to get access to this resource", 401)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(
      new AppError("User belonging to this token does no longer exist!", 401)
    );
  }

  req.user = user;

  next();
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    status: "success",
    users,
  });
});
