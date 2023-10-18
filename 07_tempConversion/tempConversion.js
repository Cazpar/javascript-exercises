const convertToCelsius = function (degreesInFahrenheit) {
  let celsius = (degreesInFahrenheit - 32) * 5 / 9;
  //force to 1 decimal place and number
  return celsius.toFixed(1) * 1;
};

const convertToFahrenheit = function (degreesInCelsius) {
  let fahrenheit = degreesInCelsius * 9 / 5 + 32;
  return fahrenheit.toFixed(1) * 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
