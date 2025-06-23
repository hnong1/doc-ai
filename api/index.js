const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors());


// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello, user ${req.user.userId}` });
});

// Port setup
const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

// Start server with error handling
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is in use. Try a different one.`);
    process.exit(1);
  } else {
    console.error('❌ Server failed to start:', err);
    process.exit(1);
  }
});
