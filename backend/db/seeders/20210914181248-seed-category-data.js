'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Categories', [
      {
        type: 'Tournament',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'LAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Casual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Competitive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'LFG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Raid',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TeamUp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Categories');
  }
};
