const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false
    },
    synopsis: {
      type: String,
      required: false
    },
    director: {
      type: String,
      required: false
    },
    cast : {
      type: Array,
      required: false
    },
    rating: {
      type: String,
      required: false
    },
    image_link: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
movieSchema.plugin(toJSON);
movieSchema.plugin(paginate);

/**
 * @typedef Movie
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
