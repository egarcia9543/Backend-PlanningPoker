const game = require('../models/game.model');
const player = require('../models/player.model');

exports.createGame = async (name) => {
    try {
        return new game({name: name}).save();
    } catch (error) {
        return error;
    }
};

exports.registerPlayerInGame = async (playerData, gameId) => {
    try {
        const newPlayer = await new player(playerData).save();
        const gameBoardUpdated = await game.findByIdAndUpdate({_id: gameId}, {$push: {players: newPlayer._id}});
        return {player: newPlayer, game: gameBoardUpdated};
    } catch (error) {
        return error;
    }
};

exports.getPlayersInGame = async (gameId) => {
    try {
        const gameData = game.findById({_id: gameId}).populate({path: 'players'})
        return gameData;
    } catch (error) {
        console.error(error);
    }
};

