const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Movie API',
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/movie/api/v1`,
    },
  ],
};

module.exports = swaggerDef;
