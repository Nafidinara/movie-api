const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { woodService } = require('../services');

const createWood = catchAsync(async (req, res) => {
  const wood = await woodService.createWood(req.body);
  res.status(httpStatus.CREATED).send(wood);
});

const getWoods = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await woodService.queryWoods(filter, options);
  res.send(result);
});

const getSearchWood = catchAsync(async (req, res) => {
  const query = req.body;
  const result = await woodService.querySearch(query, {});
  res.send(result);
});

const getTotalWood = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const result = await woodService.queryWoods(filter,{});
  res.send({
    'total' : result.totalResults
  });
});

const getWood = catchAsync(async (req, res) => {
  const wood = await woodService.getWoodById(req.params.woodId);
  if (!wood) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wood not found');
  }
  res.send(wood);
});

const updateWood = catchAsync(async (req, res) => {
  const wood = await woodService.updateWoodById(req.params.woodId, req.body);
  res.send(wood);
});

const deleteWood = catchAsync(async (req, res) => {
  await woodService.deleteWoodById(req.params.woodId);
  res.status(httpStatus.OK).send({
    result : "Success delete"
  });
});

module.exports = {
  createWood,
  getWoods,
  getWood,
  updateWood,
  deleteWood,
  getTotalWood,
  getSearchWood
};
