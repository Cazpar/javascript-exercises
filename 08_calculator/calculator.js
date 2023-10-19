const add = function (...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const subtract = function (...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum -= args[i];
  }
  return sum;
};
const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum = sum ** args[i];
  }
  return sum;
};

const factorial = function (...args) {
  let sum = 1;
  for (let i = 1; i <= args[0]; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
