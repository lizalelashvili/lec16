function moreNum(num) {
  if (num % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(moreNum(12));

function rectanglePrmt(length, width) {
  return (width + length) * 4;
}
console.log(rectanglePrmt(4, 6));

function squarePrmt(side) {
  return 6 * side;
}
console.log(squarePrmt(6));

function randomNum() {
  return Math.floor(Math.random() * 101);
}
console.log(randomNum());

function getSymbol(curr) {
  let symbol;
  switch (curr) {
    case "USD":
      symbol = "$";
      break;
    case "EUR":
      symbol = "€";
      break;
    case "GEL":
      symbol = "₾";
      break;
    default:
      symbol = "There is no symbol";
      break;
  }
  return symbol;
}

console.log(getSymbol());

let members = [
  {
    name: "Liza",
    age: 21,
  },
  {
    name: "Nutsa",
    age: 22,
  },
  {
    name: "Elene",
    age: 22,
  },
  {
    name: "Anna",
    age: 23,
  },
  {
    name: "Mariam",
    age: 23,
  },
];

function youngAge(array) {
  let youngest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].age < youngest.age) {
      youngest = array[i];
    }
  }
  return youngest;
}
console.log(youngAge(members));
