const { Recipe } = require("../models");

const postdata = [
	{
		title: "Mai Tai",
		ingredients:
			"[{'name': 'Lime Juice', 'quantity': '3/4', 'unit': 'oz'}, {'name': 'Dry Curacao', 'quantity': '1/2', 'unit': 'oz'}, {'name': 'Orgeat', 'quantity': '1/2', 'unit': 'oz'}, {'name': 'Rum', 'quantity': '2', 'unit': 'oz'}]",
		description: 'Mai Tai description, is good, me drunk',
			user_id: 1,
	},
];

const seedPosts = () => Recipe.bulkCreate(postdata);

module.exports = seedPosts;
