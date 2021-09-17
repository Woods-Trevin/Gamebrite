'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'NumbaOne',
        lastname: 'userOne',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstname: 'NumbaTwo',
        lastname: 'userTwo',
        email: 'demo@userTwo.io',
        username: 'Demo-Two',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstname: 'NumbaThree',
        lastname: 'userThree',
        email: 'demo@userThree.io',
        username: 'Demo-Three',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstname: 'NumbaFour',
        lastname: 'userFour',
        email: 'demo@userFour.io',
        username: 'Demo-Four',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstname: 'Thisfaked',
        lastname: 'userman',
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstname: 'Thatfaked',
        lastname: 'userman',
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
