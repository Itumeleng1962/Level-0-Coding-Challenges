function areaOfTriangle(side1, side2, side3) {
  let semiParameter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(semiParameter*(semiParameter-side1)*(semiParameter-side2)*(semiParameter-side3));
  return area;
}
console.log(areaOfTriangle());
