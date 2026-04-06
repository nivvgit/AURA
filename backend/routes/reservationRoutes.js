const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const auth = require('../middleware/auth');

// Make a reservation
router.post('/', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const saved = await newReservation.save();
    res.status(201).json({ message: 'Reservation created successfully!', reservation: saved });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all reservations (Admin only)
router.get('/', auth, async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
