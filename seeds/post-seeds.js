const { Post } = require("../models");

const postData = [
  {
    title: "Title Test 1",
    post_text: "Post Test 1",
    user_id: 1,
  },
  {
    title: "Title Test 2",
    post_text: "Post Test 2",
    user_id: 2,
  },
  {
    title: "Title Test 3",
    post_text: "Post Test 3",
    user_id: 2,
  },
  {
    title: "Title Test 4",
    post_text: "Post Test 4",
    user_id: 3,
  },
  {
    title: "Title Test 5",
    post_text: "Post Test 5",
    user_id: 4,
  },
  {
    title: "Title Test 6",
    post_text: "Post Test 6",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
