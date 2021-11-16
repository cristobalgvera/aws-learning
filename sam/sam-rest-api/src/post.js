const { TABLE_NAME, dynamoDB } = require('./common');

exports.handler = async (event) => {
  const { userId } = event.pathParameters;
  const { firstName, lastName, email, website } = JSON.parse(event.body);

  const item = {
    userId,
    firstName,
    lastName,
    email,
    website,
  };

  try {
    await dynamoDB
      .put({
        TableName: TABLE_NAME,
        Item: item,
      })
      .promise();
  } catch (error) {
    console.error({ error });
    throw new Error('An error occurred when updating user');
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'User updated successfully' }),
  };
};
