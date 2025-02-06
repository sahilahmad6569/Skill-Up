const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); // Import the User model
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// JWT secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key'; // Use process.env to load secret from env

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    body('name', 'Name is required').notEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10); // Use bcrypt to generate salt rounds
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      user = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Save user to DB
      await user.save();
      
      // Return success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST /api/auth/login
// @desc    Authenticate user and return token
// @access  Public
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Invalid email or password' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Generate a JWT token
      const payload = { user: { id: user._id } };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

      // Return JWT token
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET /api/auth/user
// @desc    Get the logged-in user's details (protected route)
// @access  Private (protected by authMiddleware)
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Don't send the password field
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
