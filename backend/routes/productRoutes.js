const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productController");

const router = express.Router();

// const upload = multer({ dest: "./images/products" });

router.get("/", productController.getProducts);
router.get("/queries", productController.getQueries);
router.get("/escrow/queries", productController.getEscrowQueries);
router.post("/query", productController.createQuery);
router.post("/escrow/query", productController.escrowQuery);
router.delete("/query/:id", productController.deleteQuery);
router.delete("/escrow/query/:id", productController.deleteEscrowQuery);

router.post("/", productController.addProduct);

router.post("/update/:id", productController.updateProduct);

router.delete("/", productController.deleteProduct);

router.get("/admin/stats", productController.dashboardStats);

module.exports = router;
