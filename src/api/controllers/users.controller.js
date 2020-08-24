const UserModel = require('../models/user.model');

const get = async (req, res, next) => {
  const users = UserModel.findById(req.params.userId);
  res.status(200).json({
    data: users
  });
};

const getAll = async (req, res, next) => {
  const users = UserModel.findAll();
  res.status(200).json({
    data: users
  });
};

const create = async (req, res, next) => {
  await UserModel.create(req.body);
  res.status(201).send('Create success');
};

module.exports = {
  get,
  getAll,
  create
}