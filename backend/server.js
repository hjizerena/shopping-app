const express = require('express');
const app = express();
const path = require('path');
const products = require("./data/products");

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

const port = process.env.PORT || 5000;

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});