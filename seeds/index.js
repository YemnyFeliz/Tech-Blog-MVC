const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

const userData = require('./user-seed.json');
const postData = require('./post-seed.json');
const commentData = require('./comment-seed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const seedUsers = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

const seedPosts = await Post.bulkCreate(postData);
const seedComments = await Comment.bulkCreate(commentData);



process.exit(0);
}

seedDatabase();

