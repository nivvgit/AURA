const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // We'll store hashed passwords
});

module.exports = mongoose.model('Admin', AdminSchema);
