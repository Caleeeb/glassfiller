const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Recipe, Ingredient } = require("../models");

// get all recipe cards
router.get("/", (req, res) => {
	console.log(req.session);
	Recipe.findAll({
		attributes: ["id", "title", "description", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Ingredient,
			},
		],
	})
		.then((dbPostData) => {
			// pass a single post object into the homepage template
			const recipes = dbPostData.map((recipe) => recipe.get({ plain: true }));

			res.render("homepage", {
				recipes,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get all ingredients cards
router.get("/", (req, res) => {
	console.log(req.session);
	Ingredient.findAll({
		attributes: ["id", "title", "description", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Recipe,
			},
		],
	})
		.then((dbPostData) => {
			// pass a single post object into the homepage template
			const recipes = dbPostData.map((recipe) => recipe.get({ plain: true }));

			res.render("/single-recipe", {
				recipes,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get one recipe card
router.get("/recipes/:id", (req, res) => {
	Recipe.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "description", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Ingredient,
				attributes: ["name", "quantity", "unit", "garnish", "created_at"],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}

			// serialize the data
			const recipe = dbPostData.get({ plain: true });
			// console.log(recipe);

			const { ingredients } = recipe;
			console.log(ingredients);

			// pass data to template
			res.render("single-recipe", {
				recipe,
				ingredients,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create login session (The commented out code was preventing the login page from loading)
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

router.get("/add-recipe", (req, res) => {
	res.render("add-recipe");
});

module.exports = router;
