const router = require('express').Router();
const { Profile, Favorites } = require('../../models');

router.put('/:user_id', async (req, res) => {
  Favorites.update({
    author: req.body.author,
    quote: req.body.quote,
    user_id: req.body.user_id,
  },
  {
    where: {
      user_id: req.params.user_id,
    },
  }) .then((updatedFavorites) => {
    // Sends the updated book as a json response
    res.json(updatedFavorites);
  })
  .catch((err) => res.json(err))
});

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorites.findAll({
      include: [{ model: Profile }],
    });
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const favorites = await Favorites.findByPk(req.params.user_id, {
      include: [{ model: Profile }],
    });
    if (!favorites) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});