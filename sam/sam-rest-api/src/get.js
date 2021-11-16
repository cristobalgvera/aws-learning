const { TABLE_NAME, dynamoDB } = require('./common');

exports.handler = async (event) => {
  const { userId } = event.pathParameters;

  let data;

  try {
    data = await dynamoDB
      .get({
        TableName: TABLE_NAME,
        Key: { userId },
      })
      .promise();
  } catch (error) {
    console.error({ error });
    throw new Error('An error occurred requesting user');
  }

  if (!data.Item)
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'User not found' }),
    };

  return {
    statusCode: 200,
    body: JSON.stringify(data.Item),
  };
};
