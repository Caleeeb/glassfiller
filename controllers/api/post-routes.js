const router = require("express").Router();
const { User, Recipe, Ingredient } = require("../../models");
const sequelize = require("../../config/connection");

// get all users
router.get("/", (req, res) => {
	console.log("==============================");
	Recipe.findAll({
		order: [["created_at", "DESC"]],
		attributes: ["id", "title", "ingredients", "description", "user_id", "created_at",],
		order: [["created_at", "DESC"]],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
		// 	dbPostData.map(post => {
		// 	post.ingredients = JSON.parse(post.ingredients)
		// 	return post
		// })
			res.json (dbPostData)
		})
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
		attributes: ["id", "title", "ingredients", "description", "user_id", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			// dbPostData.ingredients = JSON.parse(dbPostData.ingredients);
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
	console.log(req.body)
	// expects {title: 'Mai Tai', ingedients: [{name:'Lime Juice', quantity: '3/4', unit: "oz"}, {name:'Orgeat', quantity: '1/2', unit: "oz"}, 'Dry Curacao', 'Rum', 'Mint'], user_id: 1, }
	Recipe.create({
		title: req.body.title,
		// ingredients: JSON.stringify(req.body.ingredients),
		description: req.body.description,
		user_id: req.body.user_id,
	})
		.then(postData => {
			const ingredients = req.body.ingredients.map(ingredient => {
				return {...ingredient, post_id: postData.id}
			})
			return Ingredient.bulkCreate(ingredients)
		})
		.then((dbPostData) => res.json(dbPostData))
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
