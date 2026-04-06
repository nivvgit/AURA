const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Hardcoded initial setup using ENV variables
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      const token = jwt.sign({ id: 'admin123', username }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
      return res.json({ token, message: 'Logged in successfully' });
    }
    
    return res.status(400).json({ message: 'Invalid credentials' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
