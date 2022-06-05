const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
	{
		username: "caleb_day",
		password: "password123",
	},
	{
		username: "alex_knight",
		password: "password123",
	},
	{
		username: "jason_cardenas",
		password: "password123",
	},
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
