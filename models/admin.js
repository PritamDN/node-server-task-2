var mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  description : {
    type: String,
    trim: true,
    default: null
  }
});

module.exports = {Admin};