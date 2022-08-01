const { Profile } = require('../models');

const profileData = [
  {
    "username": "RyanRathbun",
    "email": "ryanrathbun6163@gmail.com",
    "password": "Kaylee1@6163"
  },
  {
    "username": "JoeMama",
    "email": "joemama@gmail.com",
    "password": "whosjoe?"
  },
  {
    "username": "BenDover",
    "email": "bendover@gmail.com",
    "password": "willyoupleasebendover"
  },
  {
    "username": "MikeAuck",
    "email": "mikeauck@gmail.com",
    "password": "mikeauck234"
  },
  {
    "username": "AndrewTate",
    "email": "andrewtate@gmail.com",
    "password": "highvaluemale1"
  }
];

const seedProfile = () => Profile.bulkCreate(profileData, {
  individualHooks:true
});

module.exports = seedProfile;
