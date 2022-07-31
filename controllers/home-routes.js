<<<<<<< HEAD
//takes from the model to the controller to the view//




const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    // const dbUserData = await User.findAll ({
    //   order: [
    //     ["name", "ASC"]
    //   ],
    //   attributes: {
    //     exclude: ["password"]
    //   }
    // });


    // const users = userData.map(user => user.get({plain: true}))


  res.render('homepage'/*, { users }*/);
  } catch (err) {
    res.status(500).json(err);
  }
=======
const router = require('express').Router();
const { Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('welcome-page'); //awaiting the user information to take the user to main
});
router.get('/signup', async (req, res) => {
  res.render('signup');
});
router.get('/main', async (req, res) => { //grab all of the user info (graph data progress favorites etc)
  res.render('main');
>>>>>>> 485c83a30a21a12d010905be0d62bca44c635259
});

module.exports = router;
