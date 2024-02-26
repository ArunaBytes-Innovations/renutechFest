const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  college: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  batch: {
    type: Date,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
  events: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
  },
});

module.exports = mongoose.model('Student', studentSchema);
