var mongoose = require('mongoose');

var Intern = mongoose.model('Intern', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  description : {
    type: String,
    trim: true,
    default: null
  },
  imageUrl: {
    type: String,
    trim: true,
    default: null
  },
  facebookUrl: {
    type: String,
    default: null
  },
  instgramUrl: {
    type: String,
    default: null
  },
  githubUrl: {
    type: String,
    default: null
  }
});

module.exports = {Intern};
