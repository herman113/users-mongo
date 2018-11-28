const assert = require('assert');
const User = require('../models/user');

describe('Delete a User', () => {
  let herman;
  beforeEach((done) => {
    herman = new User({ firstName: 'herman'});
    herman.save()
      .then(() => done());
  })
  it('model instance remove', (done) => {
    // removes an instance with given criteria
    herman.remove()
      .then(() => User.findOne({firstName: 'herman'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
  it('class method remove', (done) => {
    // removes a bunch of records with given criteria
    User.remove({firstName: 'herman'})
      .then(() => User.findOne({firstName: 'herman'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
  it('class method findAndRemove', (done) => {
    User.findOneAndRemove({firstName: 'herman'})
      .then(() => User.findOne({firstName: 'herman'}))
      .then((user) => {
        assert(user === null);
        done();
      })
  });
  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(herman._id)
    .then(() => User.findOne({ firstName: 'herman' }))
    .then((user) => {
      assert(user === null);
      done();
    });
  });
});
