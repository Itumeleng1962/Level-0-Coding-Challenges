function fahrenheitToCelsius(fahrenheit) { 
  return (fahrenheit - 32)/1.8 ; 
}
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}
console.log(celsiusToFahrenheit(89));
console.log(fahrenheitToCelsius(194))
