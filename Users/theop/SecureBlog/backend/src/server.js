const fs = require('fs');
const https = require('https');
const path = require('path');
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'certificate.pem')),
};

// Start HTTPS server first so /health works even if Mongo fails
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log('Secure server running at https://localhost:' + PORT);
});

// Connect to Mongo (log status; does not block server start)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));
