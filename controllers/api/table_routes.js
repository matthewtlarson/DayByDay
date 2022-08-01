const router = require('express').Router();
const { Table } = require('../../models');

router.post('/dailyProgress', async (req, res) => {
    try {
        const newTableData = await Table.create({
            physical_rating: req.body.physical_rating,
            emotional_rating: req.body.emotional_rating,
            spiritual_rating: req.body.spiritual_rating,
            mental_rating: req.body.mental_rating,
            social_rating: req.body.social_rating,
            overall_rating: req.body.overall_rating,
            user_id: req.session.user_id
        });
        res.status(200).json(newTableData);
    } catch (err) {
            res.status(400).json(err);
        }
});

module.exports = router;