// import mongoose library
const mongoose = require('mongoose');
// Use node es6 promise module
mongoose.Promise = global.Promise;
// Connect to local mongo
mongoose.connect('mongodb://localhost/users_test');
// execute code once in this block(for connecting to mongo) before running test
before((done) => {
  // mongo connection status
  mongoose.connection
    .once('open', () => {
      console.log('Good to go!');
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error );
    });
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
});