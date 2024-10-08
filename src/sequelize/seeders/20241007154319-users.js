'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        const users = [
            {
                name: 'John',
                email: 'johndoe@gmail.com',
                phone: '+380999999999',
            },
            {
                name: 'Alice',
                email: 'alice.wonder@gmail.com',
                phone: '+380987654321',
            },
            {
                name: 'Bob',
                email: 'bobbuilder@gmail.com',
                phone: '+380996633221',
            },
            {
                name: 'Eve',
                email: 'eve.hacker@gmail.com',
                phone: '+380981234567',
            },
            {
                name: 'Charlie',
                email: 'charlie.brown@gmail.com',
                phone: '+380995432198',
            },
            {
                name: 'David',
                email: 'david.king@gmail.com',
                phone: '+380987777777',
            },
            {
                name: 'Olivia',
                email: 'olivia.martin@gmail.com',
                phone: '+380992345678',
            },
            {
                name: 'Sophia',
                email: 'sophia.lane@gmail.com',
                phone: '+380999876543',
            },
            {
                name: 'James',
                email: 'james.bond@gmail.com',
                phone: '+380999123456',
            },
            {
                name: 'Mia',
                email: 'mia.jones@gmail.com',
                phone: '+380996666666',
            },
        ];

        await queryInterface.bulkInsert('users', users);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
