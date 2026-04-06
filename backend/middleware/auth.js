const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    // Support "Bearer <token>" format
    const activeToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
    const verified = jwt.verify(activeToken, process.env.JWT_SECRET || 'fallback_secret');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
