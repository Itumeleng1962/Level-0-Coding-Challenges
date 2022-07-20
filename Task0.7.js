function fahrenheitToCelsius(fahrenheit) { 
  return Math.round((fahrenheit - 32)/1.8) ; 
}
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 1.8) + 32)
}
console.log(celsiusToFahrenheit(89));
console.log(fahrenheitToCelsius(194))
