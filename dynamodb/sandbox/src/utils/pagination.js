import AWS from 'aws-sdk';
import { REGION } from '../constants.js';

AWS.config.update({ region: REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function scanItemsWithPagination(
  tableName,
  { limit, lastEvaluatedKey } = {},
) {
  try {
    const { Items, LastEvaluatedKey } = await dynamodb
      .scan({
        TableName: tableName,
        Limit: limit ?? 3,
        ExclusiveStartKey: lastEvaluatedKey,
      })
      .promise();

    return { items: Items, lastEvaluatedKey: LastEvaluatedKey };
  } catch (error) {
    console.error(error);
  }
}
