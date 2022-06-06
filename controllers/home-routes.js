const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');


// get all recipe cards
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
      attributes: [
        'id',
        'title',
        'ingredients',
        'description',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
       const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('homepage', { 
          posts,
          // loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// get one recipe card
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'ingredients',
        'description',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render('single-post', { 
          post,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// create login session (The commented out code was preventing the login page from loading)
router.get('/login', (req, res) => {
    //if(req.session.loggedIn) {
      //res.redirect('/');
      //return;
    //}
    res.render('login');
  });



module.exports = router;