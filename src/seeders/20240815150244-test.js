'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('tests', [
                {
                    name: 'Pedro Cli',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Igor Cli 2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Aline Cli 3',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Fernando Cli 4',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]
            , {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tests', null, {});
    }
};
