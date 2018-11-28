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