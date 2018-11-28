// add assert lib for 
const assert = require('assert');
// add User model
const User = require('../models/user');

describe('Creating Records', (done) => {
  it('saves a user', () => {
    // creates an instance of User to a const named herman
    const herman = new User({
      firstName: "herman"
    });
    // saves herman to database
    herman.save()
      .then(() => {
        // Has herman been saved properly?
        assert(!herman.isNew);
        done();
      })
  });
});
