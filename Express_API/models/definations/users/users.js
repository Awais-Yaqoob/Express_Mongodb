const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => {
        // Basic email format validation
        return /\S+@\S+\.\S+/.test(v);
      },
      message: 'Invalid email address format',
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
