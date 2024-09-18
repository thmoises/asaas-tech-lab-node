'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {

    const users = [
      {
        email: 'user1@example.com',
        apiKey: bcrypt.hashSync('618a3574-aa14-4d77-bc27-5e7bb9c9cce7', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@example.com',
        apiKey: bcrypt.hashSync('649cf8c7-477d-4ff7-ab25-77c510dc8200', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user3@example.com',
        apiKey: bcrypt.hashSync('dc131391-d3b0-4ab5-95f5-6c96854a4cdf', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user4@example.com',
        apiKey: bcrypt.hashSync('dd1af6e9-4b9f-48f3-a358-4cd2b7e2348f', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};