const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Hardcoded initial setup (to avoid needing a registration portal for this demo)
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      const token = jwt.sign({ id: 'admin123', username }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
      return res.json({ token, message: 'Logged in successfully' });
    }
    
    // Check DB if not hardcoded env vars
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    res.json({ token, message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
