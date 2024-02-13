const express = require('express');
const router = express.Router();
const appController = require('./controller/app.controller');

router.post('/newgame', appController.createNewGame);
router.post('/newplayer', appController.registerPlayer);
router.get('/game/:id', appController.getPlayersInGame);

module.exports = router;
