const router = require('express').Router();
const { Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await Profile.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('main', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  } //awaiting the user information to take the user to main
});


router.get('/signup', async (req, res) => {
  try {
    const userData = await Profile.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    
    const newUser = {
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    if (newUser) {
      for (let i = 0; i < users.length; i++) {
        if (newUser.username === users.username[i]) {
          res.redirect('/');
          return;
        }
        res.redirect('/login')
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => { //grab all of the user info (graph data progress favorites etc)
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('welcome');
});

module.exports = router;
