const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Comment Test1",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text: "Comment Test2",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text: "Comment Test3",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text: "Comment Test4",
    post_id: 4,
    user_id: 3,
  },
  {
    comment_text: "Comment Test5",
    post_id: 5,
    user_id: 5,
  },
  {
    comment_text: "Comment Test6",
    post_id: 5,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
