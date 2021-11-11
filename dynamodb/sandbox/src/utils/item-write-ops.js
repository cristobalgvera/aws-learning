import AWS from 'aws-sdk';
import { callbackLogger } from '../common/aws-callback-logger.js';
import { REGION } from '../constants.js';

AWS.config.update({ region: REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

export function upsertItem(tableName, item) {
  dynamodb.put(
    {
      TableName: tableName,
      Item: { ...item },
    },
    callbackLogger,
  );
}

export async function upsertItemAsync(tableName, item) {
  try {
    const { $response } = await dynamodb
      .put({
        TableName: tableName,
        Item: { ...item },
      })
      .promise();

    logResponse($response);
  } catch (error) {
    console.error(error);
  }
}

function logResponse(response) {
  if (response.error) console.error(response.error);
  else console.log(response.data);
}

export function updateItemConditionallyOrCreate(tableName, item, condition) {
  dynamodb.put(
    {
      TableName: tableName,
      Item: { ...item },
      ...condition,
    },
    callbackLogger,
  );
}

export function updateItem(tableName, key, updateParams) {
  dynamodb.update(
    {
      TableName: tableName,
      Key: { ...key },
      ...updateParams,
    },
    callbackLogger,
  );
}

export function deleteItem(tableName, key) {
  dynamodb.delete(
    {
      TableName: tableName,
      Key: { ...key },
    },
    callbackLogger,
  );
}

export function batchDeleteItems(tableName, keys) {
  dynamodb.batchWrite(
    {
      RequestItems: {
        [tableName]: keys.map((key) => ({
          DeleteRequest: { Key: { ...key } },
        })),
      },
    },
    callbackLogger,
  );
}

export function batchInsertItems(tableName, items) {
  dynamodb.batchWrite(
    {
      RequestItems: {
        [tableName]: items.map((item) => ({
          PutRequest: { Item: { ...item } },
        })),
      },
    },
    callbackLogger,
  );
}
