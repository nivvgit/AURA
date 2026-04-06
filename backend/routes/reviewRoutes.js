const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

// Get all reviews
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
});

// Create new review
router.post('/', async (req, res) => {
  const { author, rating, comment } = req.body;
  const { data, error } = await supabase.from('reviews').insert([{ author, rating, comment }]).select();
  if (error) return res.status(400).json({ message: error.message });
  res.status(201).json({ message: 'Review successfully added!', data: data[0] });
});

module.exports = router;
