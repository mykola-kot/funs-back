'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        const users = [
            {
                id: 1,
                name: 'John',
                email: 'johndoe@gmail.com',
                phone: '+380999999999',
            },
        ];

        await queryInterface.bulkInsert('users', users);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
