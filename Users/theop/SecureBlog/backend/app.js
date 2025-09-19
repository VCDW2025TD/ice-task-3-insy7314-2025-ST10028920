const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', https: !!req.secure });
});

module.exports = app;
