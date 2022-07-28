//make it easier access to pull at once, collects routes for easy access



const router = require('express').Router();
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);

module.exports = router;