const router = require('express').Router();
const { Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('welcome'); //awaiting the user information to take the user to main
});
router.get('/signup', async (req, res) => {
  res.render('signup');
});
router.get('/main', async (req, res) => { //grab all of the user info (graph data progress favorites etc)
  res.render('main');
});

module.exports = router;
