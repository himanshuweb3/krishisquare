const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./middlewares/error");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

app.use(express.json({ limit: "50mb" }));
// app.use(fileUpload());
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(globalErrorHandler);

module.exports = app;
