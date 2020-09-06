'use strict';

const logger = require('../../config/logger');
const log = logger.child({ module: 'users.controller' });
const UserModel = require('../models/user.model');

const get = async (req, res, next) => {
  const { userId } = req.params;
  log.info('[get] buscando usuario', userId);
  const users = UserModel.findById(userId);
  res.status(200).json({
    data: users
  });
};

const getAll = async (req, res, next) => {
  log.info('[getAll] listando usuarios');
  const users = UserModel.findAll();
  res.status(200).json({
    data: users
  });
};

const create = async (req, res, next) => {
  log.info(req.body);
  log.info('[create] %j', req.body);
  await UserModel.create(req.body);
  res.status(201).send({ message: 'Created success'});
};

module.exports = {
  get,
  getAll,
  create
}