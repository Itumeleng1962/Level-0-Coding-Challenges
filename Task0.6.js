function getMax(num1, num2, num3, ...otherNumbers) {
   let maxValue = "";
  if (num1 > num2 && num1 > num3) {
    maxValue = num1;
  } else if (num2 > num3) {
    maxValue = num2;
  } else {
    maxValue = num3;
  }

  for (let i = 0; i < otherNumbers.length; i++) {
    if (maxValue < otherNumbers[i]) {
      maxValue = otherNumbers[i];
    }
  }

  return maxValue;
}
  getMax(2,7,5)
