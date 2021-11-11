import AWS from 'aws-sdk';
import { callbackLogger } from '../common/aws-callback-logger.js';
import { REGION } from '../constants.js';

AWS.config.update({ region: REGION });

const dynamodb = new AWS.DynamoDB();

function listTables() {
  dynamodb.listTables({}, callbackLogger);
}

function getTable(tableName) {
  dynamodb.describeTable({ TableName: tableName }, callbackLogger);
}

function createTable(tableName) {
  dynamodb.createTable(
    {
      TableName: tableName,
      AttributeDefinitions: [
        { AttributeName: 'user_id', AttributeType: 'S' },
        { AttributeName: 'timestamp', AttributeType: 'N' },
      ],
      KeySchema: [
        { AttributeName: 'user_id', KeyType: 'HASH' },
        { AttributeName: 'timestamp', KeyType: 'RANGE' },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
    callbackLogger,
  );
}

function updateTable(tableName) {
  dynamodb.updateTable(
    {
      TableName: tableName,
      ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1,
      },
    },
    callbackLogger,
  );
}

function deleteTable(tableName) {
  dynamodb.deleteTable({ TableName: tableName }, callbackLogger);
}

export default {
  listTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
};
