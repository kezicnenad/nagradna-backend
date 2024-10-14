const mongoose = require('mongoose');

const lightSchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  start: {type: String, required: true},
  end: {type: String, required: true},
  time: {type: String, required: true},
});

const Light = new mongoose.model('light', lightSchema);

module.exports = Light;