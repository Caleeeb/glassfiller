const router = require("express").Router();
const { User, Post } = require("../../models");
const sequelize = require("../../config/connection");

// get all users
router.get("/", (req, res) => {
	console.log("==============================");
	Post.findAll({
		order: [["created_at", "DESC"]],
		attributes: ["id", "title", "ingredients", "user_id", "created_at"],
		order: [["created_at", "DESC"]],
		include: [
			{
				model: User,
				attributes: ["username"],
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
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "ingredients", "user_id", "created_at"],
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

router.post("/", (req, res) => {
	// expects {title: 'Mai Tai', ingedients: [{name:'Lime Juice', quantity: '3/4', unit: "oz"}, {name:'Orgeat', quantity: '1/2', unit: "oz"}, 'Dry Curacao', 'Rum', 'Mint'], user_id: 1, }
	Post.create({
		title: req.body.title,
		ingedients: JSON.stringify(req.body.ingredients),
		user_id: req.body.user_id,
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
	Post.update(req.body, {
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
	Post.destroy({
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
