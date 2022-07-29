//all the posts requests, everything the webpage is sending back to controller//
//all the posts requests, everything the webpage is sending back to controller//
const router = require('express').Router();
const { Profile } = require('../../models');

router.post('/signup', async (req, res) => {
  //going to need to post their username email and password
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
