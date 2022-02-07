const catchAsync = require("../middlewares/catchAsync");
const User = require("../models/userModel");

exports.getUserDetails = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    status: "success",
    user,
  });
});

// Delete User
exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  await user.remove();
  res.status(204).json({
    status: "success",
    data: null,
  });
});
