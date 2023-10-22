const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/LMS'; // Replace with your MongoDB URI and database name

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = database;
