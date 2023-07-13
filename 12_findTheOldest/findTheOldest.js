const findTheOldest = function(array) {
    let sorted;
    sorted = array.sort(function(a, b) {
        if (a.yearOfDeath % 1 === 0) {
            x = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            date = new Date().getFullYear();
            x = date - a.yearOfBirth;
        }
        if (b.yearOfDeath % 1 === 0) {
            y = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            date = new Date().getFullYear();
            y = date - b.yearOfBirth;
        }
        return x - y;
    })
    return sorted.reverse()[0];
};

// Do not edit below this line
module.exports = findTheOldest;
