//all the posts requests, everything the webpage is sending back to controller//
const router = require('express').Router();
const { Profile } = require('../../models');

router.post('/signup', async (req, res) => {
  //going to need to post their username email and password
});

router.post('/login', async (req, res) => {
  //this will be the scoring for their overalls and adding them to our database 
});

router.post('/main/favorites', async (req, res) => {
  //going to be a request for users to be able to add their favorites
});

router.post('/main/dailyProgress', async (req, res) => {
  //this will be the scoring for their overalls and adding them to our database 
});

router.post('/main/logout', async (req, res) => {
  //this will be true or false depending on if the button is clicked and send the data that the user should be logged out or back to sign in page
});















































/*router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await Profile.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//question for sign up page//
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'You have signed up!' });
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
});*/

module.exports = router;
