const connectDB = require("./utils/database.js");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

dotenv.config({ path: "./config.env" });
const app = require("./app");
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
