const User = require('./User');
const Post = require("./Post");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  //user can have many posts, but post can only have 1 user
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };