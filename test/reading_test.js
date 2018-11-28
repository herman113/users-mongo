const assert = require('assert');
const User = require('../models/user');

describe('Reading users out of database', () => {
  let herman;
  beforeEach((done) => {
    herman = new User({
      firstName: 'herman'
    });
    herman.save()
      .then(() => done());
  }); 
  it('finds all users with the name of herman', (done) => {
    User.find({firstName: 'herman'})
      .then((users) => {
        // console.log(users[0]._id); // need to be converted toString
        // console.log(herman._id); // need to be converted toString
        assert(users[0]._id.toString() === herman._id.toString());
        done();
      });
  });
  it('finds a user with an id', (done) => {
    User.findOne({ _id: herman._id })
      .then((user) => {
        assert(user.firstName === 'herman');
        done();
      });
  });
});