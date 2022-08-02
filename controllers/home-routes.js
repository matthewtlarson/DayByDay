const router = require('express').Router();
const session = require('express-session');
const { Profile, Table, Favorites } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await Profile.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Favorites}, { model: Table }]
    });

    const userProfile = userData.get({plain: true});
  
    res.render('homepage', {
      userProfile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
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


