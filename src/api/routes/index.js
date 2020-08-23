const express = require('express');
const userRoutes = require('./user.route.js');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
/**
 * Routes for users
 */
router.use('/users', userRoutes);

module.exports = router;