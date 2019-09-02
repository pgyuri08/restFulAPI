const mongoose = require('mongoose');

var membersSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: 'This field is required.'
  },
  last_name: {
    type: String,
    required: 'This field is required.'
  },
  userId: {
    type: Number
  },
  ip_address: {
    type: String,
    required: 'This field is required.'
  },
  first_name: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  }
});
//We have to register this contact schema in mongoose to do this we call the model function

mongoose.model('Members', membersSchema);
