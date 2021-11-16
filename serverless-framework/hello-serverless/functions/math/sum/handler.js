'use-strict';

module.exports.sum = async (event) => {
  const { num1, num2 } = JSON.parse(event.body);
  const sum = num1 + num2;
  const result = { num1, num2, sum };

  console.log({ result });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
