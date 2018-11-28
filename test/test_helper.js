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
  });

// beforeEach is a hook that will execute code before running a test.
// done is a callback that will wait for code in before each to complete
// before running new test
beforeEach((done) => {
  // this will use mongoose to find all collections.users a delete them.
  mongoose.connection.collections.users.drop(() => {
    // ready to run the next test
    done();
  });
})