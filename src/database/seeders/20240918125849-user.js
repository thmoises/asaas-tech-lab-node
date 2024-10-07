'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {

    const users = [
      {
        email: 'user1@example.com',
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250YTFAZ21haWwuY29tIn0.aPbhx4QONeubDyPUoYHh9zlGU6LgyucX0TMIJjBjVO4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@example.com',
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250YTJAZ21haWwuY29tIn0.rFBzQV06yvBBWESoOIEQXY6SoaM--CCS-HRePYSVJho",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user3@example.com',
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250YTNAZ21haWwuY29tIn0.UZKhBxWjHSwAXq8_aYgVePo91eVPCeE90uJ7RRa0_IY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user4@example.com',
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250YTRAZ21haWwuY29tIn0.82T4JpF5O2ek3WElqZod6kGr4zerdiHoVqhH_Po1HzI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user5@example.com',
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250YTVAZ21haWwuY29tIn0.DGiOVtLcka2oJsKdsmLPOKZpZIuCf432TrNi-_pJCb0",
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