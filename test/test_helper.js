// Connect to mongoose library
const mongoose = require('mongoose');

// Connect to local mongo
mongoose.connect('mongodb://localhost/users_test');

// mongo connection status
mongoose.connection
  .once('open', () => {
    console.log('Good to go!');
  })
  .on('error', (error) => {
    console.warn('Warning', error );
  })