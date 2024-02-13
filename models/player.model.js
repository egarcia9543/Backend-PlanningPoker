const mongoose = require('../database');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['player', 'admin'],
    },
    initials: {
        type: String,
        required: true,
    },
    chosenCard: {
        type: mongoose.Schema.Types.Mixed,
        default: 0,
    },
    playerMode: {
        type: String,
        required: true,
        enum: ['player', 'spectator']
    },
});

const player = mongoose.model('players', playerSchema);
module.exports = player;
