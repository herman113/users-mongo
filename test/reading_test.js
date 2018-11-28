const assert = require('assert');
const User = require('../models/user');

describe('Reading users out of database', () => {
  let herman;

  beforeEach((done) => {
    herman = new User({
      firstName: 'Herman'
    });
    herman.save()
      .then(() => done());
  }); 

  it('finds all users with the name of herman', (done) => {
    User.find({firstName: 'Herman'})
      .then((users) => {
        console.log(users);
        done();
      });
  });
});