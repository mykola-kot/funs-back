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
            {
                id: 2,
                name: 'Alice',
                email: 'alice.wonder@gmail.com',
                phone: '+380987654321',
            },
            {
                id: 3,
                name: 'Bob',
                email: 'bobbuilder@gmail.com',
                phone: '+380996633221',
            },
            {
                id: 4,
                name: 'Eve',
                email: 'eve.hacker@gmail.com',
                phone: '+380981234567',
            },
            {
                id: 5,
                name: 'Charlie',
                email: 'charlie.brown@gmail.com',
                phone: '+380995432198',
            },
            {
                id: 6,
                name: 'David',
                email: 'david.king@gmail.com',
                phone: '+380987777777',
            },
            {
                id: 7,
                name: 'Olivia',
                email: 'olivia.martin@gmail.com',
                phone: '+380992345678',
            },
            {
                id: 8,
                name: 'Sophia',
                email: 'sophia.lane@gmail.com',
                phone: '+380999876543',
            },
            {
                id: 9,
                name: 'James',
                email: 'james.bond@gmail.com',
                phone: '+380999123456',
            },
            {
                id: 10,
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
