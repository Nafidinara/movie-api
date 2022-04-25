const httpStatus = require('http-status');
const { Wood } = require('../models');
const ApiError = require('../utils/ApiError');
const logger = require('./../config/logger');

/**
 * Create a wood
 * @param {Object} woodBody
 * @returns {Promise<Wood>}
 */
const createWood = async (woodBody) => {
  return Wood.create(woodBody);
};

/**
 * Query for woods
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWoods = async (filter, options) => {
  return Wood.paginate(filter, options);
};

// /**
//  * Query for woods
//  * @param {Object} filter - Mongo filter
//  * @param {Object} options - Query options
//  * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
//  * @param {number} [options.limit] - Maximum number of results per page (default = 10)
//  * @param {number} [options.page] - Current page (default = 1)
//  * @returns {Promise<QueryResult>}
//  */
// const querySearch = async (filter, options) => {
//   let queryFilter = {};
//   for (const key in filter) {
//     queryFilter[key] = {$in: filter[key]};
//   }
//   logger.debug(JSON.stringify(queryFilter));
//   return Wood.find(queryFilter, options);
// };

/**
 * Get wood by id
 * @param {ObjectId} id
 * @returns {Promise<Wood>}
 */
const getWoodById = async (id) => {
  return Wood.findById(id);
};

/**
 * Update wood by id
 * @param {ObjectId} woodId
 * @param {Object} updateBody
 * @returns {Promise<Wood>}
 */
const updateWoodById = async (woodId, updateBody) => {
  const wood = await getWoodById(woodId);
  if (!wood) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wood not found');
  }
  Object.assign(wood, updateBody);
  await wood.save();
  return wood;
};

/**
 * Delete wood by id
 * @param {ObjectId} woodId
 * @returns {Promise<Wood>}
 */
const deleteWoodById = async (woodId) => {
  const wood = await getWoodById(woodId);
  await wood.remove();
  return wood;
};

module.exports = {
  createWood,
  queryWoods,
  getWoodById,
  updateWoodById,
  deleteWoodById,
};
