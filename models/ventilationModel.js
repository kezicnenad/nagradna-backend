const mongoose = require('mongoose');

const ventilationSchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  exhaust: {type: Number, required: true},
  air: {type: Number, required: true},
  time: {type: String, required: true},
});

const ventilation = new mongoose.model('ventilation', ventilationSchema);

module.exports = ventilation;