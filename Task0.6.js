function getMax(num1, num2, num3) {
    if (num1 > num2 || num1 > num3) {
      maxValue = num1;
    } else if (num2 > num1 || num2 > num3) {
      maxValue = num2;
    } else if (num3 > num1 || num3>num2){
      maxValue = num3;
    }
      return maxValue
  }
  console.log(getMax(10,50,36));
