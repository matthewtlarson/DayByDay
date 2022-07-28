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
});

module.exports = router;