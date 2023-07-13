const palindromes = function (string) {
    let newString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverseString = [...newString].reverse().join("").toLowerCase();
    return newString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
