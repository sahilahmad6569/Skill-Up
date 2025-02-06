const jwt = require('jsonwebtoken');

// JWT secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key'; // Use process.env to load secret from env

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  // Get token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Remove 'Bearer ' if present

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Attach user to the request object (so it can be accessed in other routes)
    req.user = decoded.user;
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
