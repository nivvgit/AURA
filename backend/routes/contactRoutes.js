const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const auth = require('../middleware/auth');

// Get all contacts (Admin only)
router.get('/', auth, async (req, res) => {
  const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
});

// Create new contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]).select();
  if (error) return res.status(400).json({ message: error.message });
  res.status(201).json({ message: 'Message sent successfully!', data: data[0] });
});

module.exports = router;
