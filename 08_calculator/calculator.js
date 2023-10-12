const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  array.forEach(function (item) {
    sum += item;
  });
  return sum;
};

const multiply = function () {
  let product = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
};

const power = function (number, power) {
  let initialNumber = number;
  for (let i = 1; i < power; i++) {
    number *= initialNumber;
  }
  return number;
};

const factorial = function (number) {
  if (number === 0) return 1;
  for (let i = number; i > 1; i--) {
    number *= i - 1;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
