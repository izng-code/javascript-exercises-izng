const repeatString = function (string, num) {
  let concString = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      concString += string;
    }
    return concString;
  }
};

// Do not edit below this line
module.exports = repeatString;
