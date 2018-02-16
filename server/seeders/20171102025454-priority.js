'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priorities', [{
      title: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Low',
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
