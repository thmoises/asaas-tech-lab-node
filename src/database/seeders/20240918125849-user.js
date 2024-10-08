'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    const users = [
      {
        email: 'user1@example.com',
        apiKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyMUBleGFtcGxlLmNvbSJ9.5DK2w70WyEtf4HzBPXqsHfO8xoY30CG8rO0QQ5BQGZg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@example.com',
        apiKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyMkBleGFtcGxlLmNvbSJ9.20lKVN-pzmT8teJwCjH07Ebm2r-tkoY5POxkioy7Ie0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user3@example.com',
        apiKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyM0BleGFtcGxlLmNvbSJ9.pv5Y7HIqjloZtlMfVKwTMXv1IWQ7JA0Cl6iMLVmzvDQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user4@example.com',
        apiKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyNEBleGFtcGxlLmNvbSJ9.XWTnHFbUZtTT5azD7ByadrLs42dM4vbsrQFvVZcq6m4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user5@example.com',
        apiKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyNUBleGFtcGxlLmNvbSJ9.G7UAkWKqtHOUxvW7zvqpMA9kjYk0uNZuEVMGkKHpBK8',
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
