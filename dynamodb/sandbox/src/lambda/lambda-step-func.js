import AWS from 'aws-sdk';

const stepFunc = new AWS.StepFunctions();
const stateMachineArn =
  process.env.STATE_MACHINE_ARN ||
  'arn:aws:states:sa-east-1:109460642895:stateMachine:HelloWorld';

exports.handler = async (event) => {
  const result = await stepFunc
    .startExecution({
      stateMachineArn,
      input: JSON.stringify(event),
    })
    .promise();

  console.log({ result });
  return result;
};
