const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.route("/password/forgot").post(authController.forgotPassword);
router.route("/password/reset/:token").put(authController.resetPassword);

router.delete("/:id", userController.deleteUser);
router.get("/me", authController.protect, userController.getUserDetails);
router.get("/logout", authController.logout);
router.get("/admin", authController.getAllUsers);

module.exports = router;
