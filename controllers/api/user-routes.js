const router = require("express").Router();
const { User, Post } = require("../../models");

// get all users
router.get("/", (req, res) => {
	User.findAll({
		attributes: { exclude: ["password"] },
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get one user
router.get("/:id", (req, res) => {
	User.findOne({
		attributes: { exclude: ["password"] },
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Post,
				attributes: [
					"id",
					"title",
					"ingredients",
					"user_id",
					"measurements",
					"created_at",
				],
			},
		],
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.status(200).json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create user post
// router.post('', (req, res) => {
//     User.create({
//       username: req.body.username,
//       password: req.body.password
//     })
//       .then(dbUserData => {
//          req.session.save(() => {
//            req.session.user_id = dbUserData.id;
//            req.session.username = dbUserData.username;
//            req.session.loggedIn = true;

//           res.json(dbUserData);
//         });
//       });
// });

// post route for login
// add console logs to find where it's stopping
router.post("/login", (req, res) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(400).json({ message: "Incorrect password or username." });
				return;
			}
			const validPassword = dbUserData.checkPassword(req.body.password);

			if (!validPassword) {
				res.status(400).json({ message: "Incorrect password or username." });
				return;
			}

			// .save is returning as undefined
			req.session.save(() => {
				//declare session variables
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res
					.status(200)
					.json({ user: dbUserData, message: "You are now logged in!" });
			});
		})
		.catch((err) => {
			console.error(err);
			res.status(400).json(err);
		});
});

router.post("/signup", (req, res) => {
	User.create(req.body, {
		attributes: {
			username: req.body.username,
			password: req.body.password,
		},
	})
		.then((dbUserData) => {
			req.session.save(() => {
				//declare session variables
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res.json({ user: dbUserData, message: "You are now logged in!" });
			});
		})
		.catch((err) => {
			console.error(err);
			err.original.errno === 1062
				? res.status(403).json({ message: "This username is already taken." })
				: res.status(400).json(err);
		});
});

// update user (may not be necessary)
router.put("/:id", (req, res) => {
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Delete user
router.put("/:id", (req, res) => {
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// logout route
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
