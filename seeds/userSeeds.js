const User = require('../models/User');

const userSeeds = [
  //Clay
  {
    username: 'Tobi',
    password: '123',
    email: 'tobi@tobi.com'
  },
  //Mike
  {
    username: 'Michael',
    password: '123',
    email: 'michael@michael.com'
  },
];

const seedUsers = () => User.bulkCreate(userSeeds, {
  individualHooks: true,
});

module.exports = seedUsers;