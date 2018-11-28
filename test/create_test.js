// add assert lib for 
const assert = require('assert');
// add User model
const User = require('../models/user');

describe('Creating Records', () => {
  it('saves a user', () => {
    // creates an instance of User to a const named herman
    const herman = new User({
      firstName: "Herman"
    });
    // saves herman to database
    herman.save();
  });
});

// Is a hook. will call beforeEach before each assertion
beforeEach(() => {
  // this will use mongoose to find all collections.users a delete them.
  mongoose.connection.collections.users.drop();
})