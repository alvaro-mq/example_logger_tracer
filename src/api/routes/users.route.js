var express = require('express');
const UserController = require('../controllers/users.controller');

const router = express.Router();

router.route('/')
  .get(UserController.getAll)
  .post(UserController.create);

router.route('/:userId')
  .get(UserController.get);

module.exports = router;
