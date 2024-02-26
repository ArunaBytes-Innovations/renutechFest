const mongoose = require('mongoose');

const coordinatorSchema = new mongoose.Schema({
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
    batch: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Coordinator', coordinatorSchema); // Model name changed to Coordinator
