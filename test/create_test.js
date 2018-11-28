// add assert lib for 
const assert = require('assert');
// add User model
const User = require('../models/user');
// create a test named Creating Records
describe('Creating Records', () => {
  // portion of test named saves a user
  it('saves a user', (done) => {
    // creates an instance of User to a const named herman
    const dorota = new User({
      firstName: "Dorota"
    });
    // saves herman to database
    dorota.save()
      .then(() => {
        // Has herman been saved properly?
        assert(!dorota.isNew);
        done();
      });
  });
});
