const { user } = require('../models');

const userData = [
    {
        username: 'AndyCodes',
        password: 'password123'
    },
    {
        username: "cuteNerd",
        password: "powerpuffcode",
      },
      {
        username: "NinaTech",
        password: "codeisfun",
      },
      {
        username: "Brian",
        password: "password07",
      },
      {
        username: "incognito",
        password: "secret123",
      },
    ];
    
    const seedUsers = () =>
      User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
    module.exports = seedUsers;
