'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('statuses', [{
      title: 'Lame',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Sick',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
