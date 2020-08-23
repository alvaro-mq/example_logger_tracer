var express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
  .get(UserController.get);

module.exports = router;
