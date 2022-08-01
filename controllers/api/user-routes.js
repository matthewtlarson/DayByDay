const router = require('express').Router();
const { Profile, Favorites, Table } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const userData = await Profile.findAll({ 
      order: [['username']]
    });

    const users = userData.map((project) => project.get({ plain: true }));
    
    for (const { username } of users) {
      if (username === req.body.username) {
        res
        .status(400)
        .json({ message: 'That username already exists!' });
        return;
      }
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

router.post('/login', async (req, res) => {
  try {
    const userData = await Profile.findOne({ where: { username: req.body.username } });
    console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(500)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;
