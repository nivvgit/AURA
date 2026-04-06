const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');
const auth = require('../middleware/auth');

// Get all menu items
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('menus').select('*');
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
});

// Add new menu item (Admin only)
router.post('/', auth, async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;
  const { data, error } = await supabase.from('menus').insert([{ name, description, price, category, imageUrl }]).select();
  if (error) return res.status(400).json({ message: error.message });
  res.status(201).json(data[0]);
});

// Delete menu item (Admin only)
router.delete('/:id', auth, async (req, res) => {
  const { error } = await supabase.from('menus').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ message: error.message });
  res.json({ message: 'Item deleted' });
});

module.exports = router;
