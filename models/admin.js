var mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = {Admin};