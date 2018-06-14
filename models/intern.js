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
  bio : {
    type: String,
    trim: true,
    required: true
  },
  hobby : {
    type: String,
    trim: true,
    required: true
  },
  imageUrl: {
    type: String,
    trim: true,
    required: true
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
