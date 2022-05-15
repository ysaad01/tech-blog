const { User } = require("../models");

const userData = [
  {
    username: "Test1",
    email: "test1@email.com",
    password: "password1",
  },
  {
    username: "Test2",
    email: "test2@email.com",
    password: "password2",
  },
  {
    username: "Test3",
    email: "test3@email.com",
    password: "password2",
  },
  {
    username: "Test4",
    email: "test4@email.com",
    password: "password4",
  },
  {
    username: "Test5",
    email: "test5@email.com",
    password: "password5",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
