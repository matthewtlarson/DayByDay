
const router = require('express').Router();

const userRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/', userRoutes);

module.exports = router;
