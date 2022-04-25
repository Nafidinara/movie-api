const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    image: Joi.string(),
    role: Joi.string().default('user').valid('user', 'admin','superadmin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    role: Joi.string().valid('user', 'admin','superadmin'),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTotalUser = {
  query: Joi.object().keys({
    role: Joi.string().valid('user', 'admin','superadmin'),
  }),
};

const getSearchUser = {
  body: Joi.object().keys({
    _id: Joi.alternatives().try(Joi.string(), Joi.array()),
    email: Joi.alternatives().try(Joi.string(), Joi.array()),
    name: Joi.alternatives().try(Joi.string(), Joi.array()),
    image: Joi.alternatives().try(Joi.string(), Joi.array()),
    role: Joi.alternatives().try(Joi.string().valid('user', 'admin','superadmin'), Joi.array())
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getImageUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
      image: Joi.string(),
      role: Joi.string().valid('user', 'admin','superadmin'),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getTotalUser,
  getSearchUser,
  getImageUser
};
