const assert = require('assert');
const User = require('../models/user');

describe('Delete a User', () => {
  let herman;
  beforeEach((done) => {
    herman = new User({ firstName: 'herman'});
    herman.save()
      .then(() => done());
  })

  it('model instance remove', () => {

  });
  it('class method remove', () => {

  });
  it('class method findAndRemove', () => {

  });
  it('class method findByIdAndRemove', () => {

  });
});
