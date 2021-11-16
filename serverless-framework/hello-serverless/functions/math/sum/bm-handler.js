'use-strict';

module.exports.sum = async (event) => {
  const { num1, num2 } = event;
  return +num1 + +num2;
};
