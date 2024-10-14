const mongoose = require('mongoose');

const temperatureHumiditySchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  temperature: {type: Number, required: true},
  humidity: {type: Number, required: true},
  time: {type: String, required: true},
});

const TemperatureHumidity = new mongoose.model('temperatureHumidity', temperatureHumiditySchema);

module.exports = TemperatureHumidity;