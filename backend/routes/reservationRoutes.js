const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const auth = require('../middleware/auth');

// Get all reservations (Admin only)
router.get('/', auth, async (req, res) => {
  const { data, error } = await supabase.from('reservations').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
});

// Create new reservation
router.post('/', async (req, res) => {
  const { name, email, phone, date, time, guests } = req.body;
  const { data, error } = await supabase.from('reservations').insert([{ name, email, phone, date, time, guests }]).select();
  if (error) return res.status(400).json({ message: error.message });
  res.status(201).json({ message: 'Reservation created successfully', data: data[0] });
});

// Update reservation status (Admin only)
router.patch('/:id', auth, async (req, res) => {
  const { status } = req.body;
  const { data, error } = await supabase.from('reservations').update({ status }).eq('id', req.params.id).select();
  if (error) return res.status(500).json({ message: error.message });
  res.json(data[0]);
});

module.exports = router;
