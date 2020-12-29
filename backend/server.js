if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const {connectDB} = require("./config/db");
require('colors');
const {errorHandler} = require("./middleware/middleware");
const {notFound} = require("./middleware/middleware");
const {productRoutes} = require("./routes/productRoutes");

connectDB();

app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  return res.send('API is running');
});

app.use((req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  return next(err);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  return res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null: err.stack
  })
});

app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT;

app.listen(port, error => {
  if (error) throw error;
  console.log(`process running in ${process.env.NODE_ENV} on port ${port}`.brightYellow.bold);
});