const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User-Post association
User.hasMany(Post, {
  foreignKey: "user_id",
});

//Post-User association
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment-User association
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

// Comment-Post association
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
  hooks: true,
});

// User-Comment association
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

// Post-Comment association
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
  hooks: true,
});

module.exports = { User, Post, Comment };
