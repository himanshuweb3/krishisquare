const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URI, {}).then(() => {
    console.log("DB connection successful!");
  });
};

module.exports = connectDB;
