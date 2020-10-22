const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comments');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  //user can have many posts, but post can only have 1 user
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

//one user can vote on many posts, and many users can vote on one post. many-to-many relationship
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

//vote relationships
  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });


  //comment relationships
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote, Comment };