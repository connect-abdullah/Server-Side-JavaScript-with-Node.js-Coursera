const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
  let area = 0.0;
  // write logic here
  // note that you check the values passed are not null before performing any operation on them


  if (side === undefined && length === undefined && breadth === undefined && radius === undefined) {
    return -1;
  }

  if (choice == "circle") {
    area = pi * radius * radius;
  } else if (choice == "rectangle") {
    area = length * breadth;
  } else if (choice == "square") {
    area = side * 4;
  } else {
    area = -1;
  }

  return area;
};
module.exports = { calculateArea };
