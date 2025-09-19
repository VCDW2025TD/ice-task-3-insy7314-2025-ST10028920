const https = require('https');
const fs = require('fs');
const path = require('path');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const keyPath = path.join(__dirname, 'ssl', 'privatekey.pem');
const certPath = path.join(__dirname, 'ssl', 'certificate.pem');

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Secure API running at https://localhost:${PORT}`);
});
