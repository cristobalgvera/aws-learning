const { TABLE_NAME, dynamoDB } = require('./common');

exports.handler = async (event) => {
  const { userId } = event.pathParameters;

  try {
    await dynamoDB
      .delete({
        TableName: TABLE_NAME,
        Key: { userId },
      })
      .promise();
  } catch (error) {
    console.error({ error });
    throw new Error('An error occurred deleting user');
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'User deleted successfully' }),
  };
};
