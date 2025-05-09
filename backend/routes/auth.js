const authController = require('../controllers/authControllers');

const router = require('express').Router();

// Register route
router.post("/register", authController.registerUser);

// Login route
router.post("/login", authController.loginUser);

module.exports = router;