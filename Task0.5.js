function areaOfTriangle(side1, side2, side3) {
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3));
    return area;
  }
  console.log(areaOfTriangle(1,2,3));
