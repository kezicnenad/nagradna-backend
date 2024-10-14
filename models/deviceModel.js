const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  mac_address: {type: String, required: true},
  device_name: {type: String, required: true},
  ssid: {type: String, required: true},
  password: {type: String, required: true},
  is_online: {type: Boolean, required: false},
  time: {type: String, required: true},
});

const device = new mongoose.model('device', deviceSchema);

module.exports = device;