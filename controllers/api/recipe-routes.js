const router = require("express").Router();
const { User, Recipe, Ingredient } = require("../../models");
const sequelize = require("../../config/connection");

// get all recipes
router.get("/", (req, res) => {
	console.log("==============================");
	Recipe.findAll({
		order: [["created_at", "DESC"]],
		attributes: ["id", "title", "description", "user_id", "created_at"],
		order: [["created_at", "DESC"]],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Ingredient,
				attributes: ["name", "quantity", "unit"],
			},
		],
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	Recipe.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "description", "user_id", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Ingredient,
				attributes: ["name", "quantity", "unit"],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// post recipe
router.post("/", (req, res) => {
	console.log(req.body);
	console.log(req.session);
	Recipe.create({
		title: req.body.title,
		description: req.body.description,
		user_id: req.session.user_id,
	})
		// TODO: DEBUG
		.then((dbPostData) => {
			// adding recipe_id to the ingredient objects so they are related
			const ingredients = req.body.ingredientArray.map((ingredientObj) => {
				ingredientObj.recipe_id = dbPostData.id;
				return ingredientObj;
			});
			// creating each individual ingredient into the database
			Ingredient.bulkCreate(ingredients);
			console.log(ingredients);
			console.log(dbPostData);
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	Recipe.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	Recipe.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
