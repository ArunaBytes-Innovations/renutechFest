const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    tagLine: {
        type: String,
        required: true,
    },
    coordinators: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Coordinator',
            },
        ],
    },
});

module.exports = mongoose.model('Event', eventSchema);
