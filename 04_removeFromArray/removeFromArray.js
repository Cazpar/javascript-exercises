const removeFromArray = function (array, ...args) {
    if (array instanceof Array) {
        return array.filter(val => !args.includes(val));
    } else {
        return "Error: first argument is not an array";
    }

};

// Do not edit below this line
module.exports = removeFromArray;
