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

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    https.createServer(sslOptions, app).listen(PORT, () => {
      // use string concatenation to avoid template literal/backtick issues
      console.log('Secure server running at https://localhost:' + PORT);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
