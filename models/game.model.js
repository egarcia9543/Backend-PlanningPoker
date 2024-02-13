const mongoose = require('../database');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    players: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'players',
            default: [],
        }]
    }
});

const game = mongoose.model('games', gameSchema);
module.exports = game;
