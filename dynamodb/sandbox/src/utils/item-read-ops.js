import AWS from 'aws-sdk';
import { REGION } from '../constants.js';

AWS.config.update({ region: REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function getItemByKey(tableName, key) {
  try {
    const { Item } = await dynamodb
      .get({
        TableName: tableName,
        Key: { ...key },
      })
      .promise();

    console.log({ Item });
    return Item;
  } catch (error) {
    console.error(error);
  }
}

export async function batchGetItemsByKey(tableName, keys) {
  try {
    const { Responses } = await dynamodb
      .batchGet({
        RequestItems: {
          [tableName]: {
            Keys: keys.map((key) => ({ ...key })),
          },
        },
      })
      .promise();

    console.log({ items: Responses[tableName] });
    return Responses[tableName];
  } catch (error) {
    console.error(error);
  }
}

export async function queryItems(tableName, query) {
  try {
    const { Items } = await dynamodb
      .query({
        TableName: tableName,
        ...query,
      })
      .promise();

    console.log({ Items });
    return Items;
  } catch (error) {
    console.error(error);
  }
}

export async function scanItems(tableName, filter) {
  try {
    const { Items } = await dynamodb
      .scan({
        TableName: tableName,
        ...filter,
      })
      .promise();

    console.log({ Items });
    return Items;
  } catch (error) {
    console.error(error);
  }
}
