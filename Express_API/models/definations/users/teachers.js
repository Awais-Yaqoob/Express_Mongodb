const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  scale: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
