const mongoose = require('mongoose');

const soilHumiditySchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  sonde_1: {type: Number, required: true},
  sonde_2: {type: Number, required: true},
  sonde_3: {type: Number, required: true},
  sonde_4: {type: Number, required: true},
  sonde_5: {type: Number, required: true},
  time: {type: String, required: true},
});

const soilHumidity = new mongoose.model('soilHumidity', soilHumiditySchema);

module.exports = soilHumidity;