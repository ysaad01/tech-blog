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
});

// Comment-Post association
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// User-Comment relationsihp
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Post-Comment association
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
