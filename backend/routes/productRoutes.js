const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productController");

const router = express.Router();

// const upload = multer({ dest: "./images/products" });

router.get("/", productController.getProducts);
router.get("/queries", productController.getQueries);
router.post("/query", productController.createQuery);
router.delete("/query/:id", productController.deleteQuery);

router.post("/", productController.addProduct);

router.post("/update/:id", productController.updateProduct);

router.delete("/", productController.deleteProduct);

module.exports = router;
