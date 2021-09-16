'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Venues', [
      {
        name: 'No Venue',
        address: '',
        city: '',
        state: '',
        zipcode: 78964,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Super Plaza',
        address: '1234 Hathaway Blvd.',
        city: 'Beaumont',
        state: 'TX',
        zipcode: 78964,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pacific Plaza',
        address: '12672 Broadway Blvd.',
        city: 'Livingston',
        state: 'TX',
        zipcode: 78000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marcus Theatre',
        address: '23 Philips Ave.',
        city: 'New York',
        state: 'NY',
        zipcode: 34897,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Energy Center',
        address: '2890 SomeAddress St.',
        city: 'Houston',
        state: 'TX',
        zipcode: 77007,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MLG Arena',
        address: '874 NobodyKnows Ave.',
        city: 'Lafayette',
        state: 'LA',
        zipcode: 56743,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
