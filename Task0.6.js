function getMax(num1, num2, num3) {
   const a = [num1,num2,num3]
    let maxValue = 0;
    let answer = a.sort(function(a,b){
        return b - a;
    });

    maxValue = answer[0];
    return maxValue;
}
  console.log(getMax());
