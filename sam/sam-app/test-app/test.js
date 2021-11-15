import AWS from 'aws-sdk';
AWS.config.update({ region: 'sa-east-1' });

const lambda = new AWS.Lambda({
  endpoint: 'http://127.0.0.1:3001/',
});

try {
  const result = await lambda
    .invoke({
      FunctionName: 'HelloWorldFunction',
      Payload: Buffer.from(JSON.stringify({})),
    })
    .promise();

  console.log({ result });
} catch (error) {
  console.error({ error });
}
