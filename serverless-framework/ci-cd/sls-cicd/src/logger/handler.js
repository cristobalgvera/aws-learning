'use strict';
const moment = require('moment');

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        'Serverless CI/CD demo, now with pipeline and production approval',
      version: '1.0.4',
      timestamp: moment().unix(),
    }),
  };
};
