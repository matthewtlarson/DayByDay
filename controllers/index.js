//make it easier access to pull at once, collects routes for easy access

const router = require('express').Router();

const userRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', userRoutes);

module.exports = router;