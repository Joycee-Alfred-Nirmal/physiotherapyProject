const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model
require('dotenv').config(); // Load environment variables

// Middleware to verify authentication
const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }

      try {
        const decoded = jwt.verify(
          token,
          '060dd81319804aa8ce0a9b98417aacbc9a6a3a22ef510f3a50042f625d297154b0ec168319cc73ed708e7159c410a86ba9d702ffc3136937c90e5883cd4a177c'
        );
        req.user = decoded; // Attach decoded user info to request
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
};

// Middleware to check if user is an admin
const verifyAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(403).json({ message: 'Forbidden: No user found' });
    }
  const user = await User.findById(req.user.id); // Fetch user from DB
  console.log("admin details: " , user);
  console.log(" admin user id verify :" , req.user.id);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
   next(); // Admin verified, continue
  } catch (error) {
    console.error('Admin verification error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { authenticate , verifyAdmin }
