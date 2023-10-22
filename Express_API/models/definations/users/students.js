const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  semester: Number  // Note: Allow `null` by default in MongoDB
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
