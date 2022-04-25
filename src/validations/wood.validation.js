const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createWood = {
  body: Joi.object().keys({
    diameter: Joi.string(),
    panjang: Joi.string(),
    kubikasi: Joi.string(),
    jml_batang: Joi.string(),
    volume: Joi.string(),
    jumlah: Joi.string()
  }),
};

const getWoods = {
  query: Joi.object().keys({
    date: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTotalWood = {
  query: Joi.object().keys({
    date: Joi.string(),
  }),
};

// const getSearchWood = {
//   body: Joi.object().keys({
//     name: Joi.string().required(),
//     color: Joi.string().required()
//   }),
// };

const getWood = {
  params: Joi.object().keys({
    woodId: Joi.string().custom(objectId),
  }),
};

const updateWood = {
  params: Joi.object().keys({
    woodId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      diameter: Joi.string(),
      panjang: Joi.string(),
      kubikasi: Joi.string(),
      jml_batang: Joi.string(),
      volume: Joi.string(),
      jumlah: Joi.string()
    })
    .min(1),
};

const deleteWood = {
  params: Joi.object().keys({
    woodId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createWood,
  getWoods,
  getWood,
  updateWood,
  deleteWood,
  getTotalWood,
};
