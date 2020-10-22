import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'merchant user',
        email: 'merchant@example.com',
        password: bcrypt.hashSync('123456', 10),
        isMerchant: true,
    },
    {
        name: ' Daniel ',
        email: 'Dan@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Sam',
        email: 'Sam@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Jane',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('123456', 10),

    },

]

export default users