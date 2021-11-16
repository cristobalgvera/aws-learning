const AWS = require('aws-sdk');
AWS.config.update({ region: 'sa-east-1' });

exports.dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.TABLE_NAME = process.env.TABLE_NAME;
