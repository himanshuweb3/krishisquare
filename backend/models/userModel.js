const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [3, "Name must be at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  identity: {
    type: String,
    required: [true, "Please select identity"],
  },
  mobile: {
    type: Number,
    required: [true, "Please enter your mobile number"],
    minLength: [10, "Number must be at least 10"],
  },
  town: {
    type: String,
    required: [true, "Please enter your town"],
  },
  GST: {
    type: String,
    required: [false, "Please enter GST No."],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  pin: {
    type: Number,
    required: [true, "Please enter your pin number"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePasswords = async function (
  providedPassword,
  password
) {
  return await bcrypt.compare(providedPassword, password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
