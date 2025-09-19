const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 1) Baseline security headers
app.use(helmet());

// 2) CORS for your React dev server
app.use(cors({
  origin: 'https://localhost:5173',
  credentials: true
}));

// 3) Parse JSON (also accept CSP reports)
app.use(express.json({ type: ['application/json', 'application/csp-report'] }));

// 4) Content Security Policy (report-only in dev from server header)
const cspDirectives = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", "https://apis.google.com"],
  styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  fontSrc: ["'self'", "https://fonts.gstatic.com"],
  imgSrc: ["'self'", "data:"],
  connectSrc: ["'self'", "https://localhost:5000"],
  frameAncestors: ["'none'"],
  upgradeInsecureRequests: []
};

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      ...cspDirectives,
      "report-uri": ["https://localhost:5000/csp-report"],
    },
    reportOnly: process.env.NODE_ENV !== 'production',
  })
);

// 5) Receive CSP violation reports
app.post('/csp-report', (req, res) => {
  console.log('CSP Violation Report:', JSON.stringify(req.body, null, 2));
  res.sendStatus(204);
});

// ---------- existing routes ----------
const authRoutes = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes);

app.get('/api/protected', protect, (req, res) => {
  res.json({
    message: 'Welcome, user ' + req.user.id + '!',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

module.exports = app;
