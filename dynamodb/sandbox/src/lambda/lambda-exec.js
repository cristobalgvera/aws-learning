import AWS from 'aws-sdk';
AWS.config.update({ region: 'sa-east-1' });

const lambda = new AWS.Lambda();

export async function square({ number }) {
  const { Payload } = await lambda
    .invoke({
      FunctionName: 'calculator',
      Payload: JSON.stringify({
        operation: 'multiply',
        values: [number, number],
      }),
    })
    .promise();

  const result = JSON.parse(Payload);
  console.log({ result });

  return result;
}
