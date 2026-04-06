const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true, enum: ['Starters', 'Main Course', 'Desserts', 'Drinks'] },
  imageUrl: { type: String, required: true, default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Menu', MenuSchema);
