const router = require('express').Router();
const userRoutes = require('./user-routes');
const tableRoutes = require('./table_routes');
const favoriteRoutes = require('./favorites_routes');

router.use('/users', userRoutes);
router.use('/table', tableRoutes);
router.use('./favorites', favoriteRoutes);

module.exports = router;