const { Comment } = require("../models");

const commentData = [
  {
    comment: "MVC makes creating full-stack apps much cleaner!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment: "Sequelize is my favorite ORM!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment: "Great explanation!",
    user_id: 5,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;