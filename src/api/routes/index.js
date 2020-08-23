const express = require('express');
const userRoutes = require('./users.route.js');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
/**
 * Routes for users
 */
router.use('/users', userRoutes);

module.exports = router;