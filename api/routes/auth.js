const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// ✅ REGISTER
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("📩 Registration attempt:", email);

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    console.log("✅ Registered user:", newUser.email);
    res.status(201).json({ message: 'User registered' });

  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// ✅ LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token });
  } catch (err) {
    console.error("❌ Login failed:", err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

module.exports = router;
