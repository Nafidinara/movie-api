const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMovie = {
  body: Joi.object().keys({
    title: Joi.string(),
    synopsis: Joi.string(),
    director: Joi.string(),
    cast: Joi.array(),
    rating: Joi.string(),
    image_link: Joi.string()
  }),
};

const getMovies = {
  query: Joi.object().keys({
    date: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTotalMovie = {
  query: Joi.object().keys({
    date: Joi.string(),
  }),
};

// const getSearchMovie = {
//   body: Joi.object().keys({
//     name: Joi.string().required(),
//     color: Joi.string().required()
//   }),
// };

const getMovie = {
  params: Joi.object().keys({
    movieId: Joi.string().custom(objectId),
  }),
};

const updateMovie = {
  params: Joi.object().keys({
    movieId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      synopsis: Joi.string(),
      director: Joi.string(),
      cast: Joi.array(),
      rating: Joi.string(),
      image_link: Joi.string()
    })
    .min(1),
};

const deleteMovie = {
  params: Joi.object().keys({
    movieId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  getTotalMovie,
};
