const mongoose = require('mongoose');

const URI = `mongodb+srv://egarciagADSO:XO57uueJpgBbPtxr@clusteradso2498009.njas8p5.mongodb.net/PlanningPoker?retryWrites=true&w=majority`;
mongoose.connect(URI);

module.exports = mongoose;
