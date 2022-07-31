
const router = require('express').Router();

<<<<<<< HEAD

const router = require('express').Router();
=======
const userRoutes = require('./api');
>>>>>>> 485c83a30a21a12d010905be0d62bca44c635259
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/', userRoutes);

module.exports = router;
