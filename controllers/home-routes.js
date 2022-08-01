const router = require('express').Router();
const session = require('express-session');
const { Profile, Table, Favorites } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await Profile.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
      include: [{ model: Favorites}, { model: Table }]
    });

    const users = userData.map((project) => project.get({ plain: true }));
    for (var i; i < users.length; i++) {
      if(session.user_id === id) {
        var userProfile = users[i];
        }
    };

    res.render('homepage', {
      userProfile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/login', (req, res) => { //grab all of the user info (graph data progress favorites etc)
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
