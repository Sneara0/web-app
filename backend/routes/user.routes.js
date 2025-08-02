const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller.js");
const authenticateUser = require("../middlewares/auth.middleware.js"); 

// Validation middlewares
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validation.middleware");
const validateResult = require("../middlewares/validateResult.middleware");

const router = express.Router();


router.post("/register", validateRegister, validateResult, registerUser);


router.post("/login", validateLogin, validateResult, loginUser);


router.get("/profile", authenticateUser, (req, res) => {
  res.status(200).json({
    message: "Welcome to your profile 🎉",
    user: req.user, 
  });
});

// Logout route
router.post("/logout", authenticateUser, (req, res) => {
  res.status(200).json({ message: "Logout successful. Please delete your token on client side." });
});

module.exports = router;
