const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.brightGreen.bold);
  } catch (e) {
    console.log(`Error: ${e.message}`.brightRed.underline.bold);
    process.exit(1);
  }
};

module.exports = {connectDB};