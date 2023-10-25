const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }
Post.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: Datatypes.STRING,
            allowNull: false
        },

        post_text: {
            type: Datatypes.TEXT,
            allowNull: false,
            validate: {
                len: [10]
            }
        },

        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        createdAt: {
            type: Datatypes.DATE,
            defaultValue: Datatypes.NOW,
            allowNull: false
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;