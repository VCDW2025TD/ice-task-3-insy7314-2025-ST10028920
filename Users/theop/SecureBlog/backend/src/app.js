const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Security & parsing
app.use(helmet());
app.use(cors({
  origin: 'https://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');
app.use('/api/auth', authRoutes);

// Protected example
app.get('/api/protected', protect, (req, res) => {
  const id = (req.user && req.user.id) ? req.user.id : 'unknown';
  res.json({
    message: 'Welcome, user ' + id + '!',
    timestamp: new Date().toISOString()
  });
});

// Simple health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

module.exports = app;
