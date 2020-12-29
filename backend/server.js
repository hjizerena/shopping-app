if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const products = require("./data/products");
const {connectDB} = require("./config/db");
const colors = require('colors');

connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const port = process.env.PORT;

app.listen(port, error => {
  if (error) throw error;
  console.log(`process running in ${process.env.NODE_ENV} on port ${port}`.brightYellow.bold);
});