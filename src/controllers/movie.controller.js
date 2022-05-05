const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { movieService } = require('../services');

const createMovie = catchAsync(async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.status(httpStatus.CREATED).send(movie);
});

const getMovies = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await movieService.queryMovies(filter, options);
  res.send(result);
});

const getSearchMovie = catchAsync(async (req, res) => {
  const query = req.body;
  const result = await movieService.querySearch(query, {});
  res.send(result);
});

const getTotalMovie = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const result = await movieService.queryMovies(filter,{});
  res.send({
    'total' : result.totalResults
  });
});

const getMovie = catchAsync(async (req, res) => {
  const movie = await movieService.getMovieById(req.params.movieId);
  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Movie not found');
  }
  res.send(movie);
});

const updateMovie = catchAsync(async (req, res) => {
  const movie = await movieService.updateMovieById(req.params.movieId, req.body);
  res.send(movie);
});

const deleteMovie = catchAsync(async (req, res) => {
  await movieService.deleteMovieById(req.params.movieId);
  res.status(httpStatus.OK).send({
    result : "Success delete"
  });
});

module.exports = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  getTotalMovie,
  getSearchMovie
};
