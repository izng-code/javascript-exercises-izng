const reverseString = function (string) {
  const array = string.split("");
  const reverseArray = [];
  for (let i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
  }
  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
