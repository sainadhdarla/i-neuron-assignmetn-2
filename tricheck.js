// Function to check if the triangle
// is equilateral or isosceles or scalene
function checkTriangle(x, y, z)
{
     
    // Check for equilateral triangle
    if (x == y && y == z)
     console.log("Equilateral Triangle")
 
    // Check for isosceles triangle
    else if (x == y || y == z || z == x)
      console.log("Isosceles Triangle")
 
    // Otherwise scalene triangle
    else
       console.log("Scalene Triangle")
}

    let x = 7, y = 7, z = 7
    checkTriangle(x, y, z)