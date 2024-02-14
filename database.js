const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.MONGO_URI;
mongoose.connect(URI);

module.exports = mongoose;
