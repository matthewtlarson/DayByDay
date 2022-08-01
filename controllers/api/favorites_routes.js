const router = require('express').Router();
const { Favorites } = require('../../models');

router.post('/add', async (req, res) => {
    try {
        const newFav = await Favorites.create({
            author: req.body.author,
            quote: req.body.quote,
            user_id: req.session.user_id
        });
        res.status(200).json(readerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;