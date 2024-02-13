const appDb = require('../data/app.data');

exports.welcome = async (req, res) => {
    res.send({response: 'Bienvenido'});
};

exports.createNewGame = async (req, res) => {
    try {
        const {name} = req.body;
        const newGame = await appDb.createGame(name);
        res.json(newGame);
    } catch (error) {
        console.error(error);
    }
};

exports.registerPlayer = async (req, res) => {
    try {
        const {name, playerMode, role, gameId} = req.body;
        const response = await appDb.registerPlayerInGame({
            name: name,
            role: role,
            initials: name.substring(0, 2).toUpperCase(),
            playerMode: playerMode
        }, gameId);
        res.json(response);
    } catch (error) {
        console.error(error);
    }
};

exports.getPlayersInGame = async (req, res) => {
    console.log('Hola');
    try {
        const players = await appDb.getPlayersInGame(req.params.id)
        res.json(players);
    } catch (error) {
        console.error(error);
    }
};

