const palindromes = function (string) {
    // Remove all non-alphanumeric characters
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the string
    let reverseString = cleanString.split('').reverse().join('');
    // Compare the two strings
    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
