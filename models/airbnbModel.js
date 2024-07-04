const mongoose = require('mongoose');

const airbnbSchema = new mongoose.Schema({ /* schema as provided */ }, { collection: 'airbnbs' });
const Airbnb = mongoose.model('Airbnb', airbnbSchema);

module.exports = Airbnb;