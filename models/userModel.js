const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  passwordHash: {type: String, required: true},
});

// namjerno stavljamo u jednini jer mongo sam kreira kolekciju u množini
const User = mongoose.model('user', userSchema);

module.exports = User;