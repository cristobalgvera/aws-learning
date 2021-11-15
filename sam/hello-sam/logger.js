exports.handler = async (event) => {
  const eventJson = JSON.stringify(event);
  console.log(`event: ${eventJson}`);

  return {
    statusCode: 200,
    body: eventJson,
  };
};
