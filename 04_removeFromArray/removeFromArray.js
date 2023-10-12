const removeFromArray = function (array, args) {
  for (let i = 1; i < arguments.length; i++) {
    if (array.includes(arguments[i])) {
      array.splice(array.indexOf(arguments[i]), 1);
    } else {
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
