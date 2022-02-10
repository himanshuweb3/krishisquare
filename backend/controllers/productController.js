const multer = require("multer");
const catchAsync = require("../middlewares/catchAsync");
const Product = require("../models/productModel");
const Query = require("../models/queryModel");
const AppError = require("../utils/AppError");
const cloudinary = require("cloudinary");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./frontend/public/assets/images/products");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `product-${Date.now()}.${ext}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(new AppError("Please upload an image!", 400), false);
//   }
// };

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

// exports.uploadProductPhoto = upload.single("photo");

exports.addProduct = catchAsync(async (req, res, next) => {
  const name = req.body.name;

  const myCloud = await cloudinary.v2.uploader.upload(
    req.files.photo.tempFilePath,
    {
      folder: "products",
      // crop: "scale",
    }
  );

  const product = await Product.create({
    name,
    photo: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(201).json({
    status: "success",
    product,
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json({
    status: "success",
    products,
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  let obj = {};
  if (req.body.name) {
    obj.name = req.body.name;
  }

  if (req.files) {
    const myCloud = await cloudinary.v2.uploader.upload(
      req.files.photo.tempFilePath,
      {
        folder: "products",
        // crop: "scale",
      }
    );
    obj.photo = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, obj, {
    new: true,
    runValidators: true,
  });
  if (!updatedProduct) {
    return next(new AppError("Product not found", 404));
  }
  res.status(200).json({
    status: "success",
    updatedProduct,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.body.id);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getQueries = catchAsync(async (req, res, next) => {
  const queries = await Query.find({});
  if (queries.length < 1) {
    return next(new AppError("No Queries Found", 404));
  }
  res.status(200).json({ status: "success", queries });
});

exports.createQuery = catchAsync(async (req, res, next) => {
  const { name, query, number, product } = req.body;
  const newQuery = await Query.create({ name, query, number, product });

  res.status(200).json({
    status: "success",
    newQuery,
  });
});

// Delete Query
exports.deleteQuery = catchAsync(async (req, res, next) => {
  const query = await Query.findById(req.params.id);
  if (!query) {
    return next(new AppError("Query not found", 404));
  }

  await query.remove();
  res.status(204).json({
    status: "success",
    data: null,
  });
});
