// number 1 HW ****
const prompt = require("prompt-sync")();
let user = confirm("are you sales man");

if (user) {
  let userSales = +prompt("enter sale");
  if (userSales < 300) {
    console.log("no commision");
  } else if (userSales >= 300 && userSales <= 500) {
    console.log("1% commision");
  } else if (userSales > 500) {
    console.log("2% commision");
  }
} else {
  console.log("2% for sales between $300 and $500 ");
}
//number 2a HW
let age = prompt("enter age");
while (age < 18) {
  age = prompt("enter again");
}
//number 2b Home work
let age;
do {
  age = prompt("enter age");
} while (age < 18);

// number 3 HW
let initAmout = +prompt("enter intial");
let annInntialRate = +prompt("enter annual intial rate");
let numOfYears = +prompt("number of years");

for (let i = 1; i <= numOfYears * 12; i++) {
  initAmout += initAmout * (annInntialRate / 100);
}
console.log(initAmout);

//number 4a hw
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += i + " ";
  }
  console.log(row);
}

//number 4b hw
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

//number 4c hw
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

//number 5 hw
let cost = +prompt("enter the cost");
let sum;
if (cost < 50000) {
  console.log(cost * (5 / 100));
} else if (cost >= 50_000 && cost < 100000) {
  sum = 1000 + (10 / 100) * (cost - 50_000);
  console.log(sum);
} else if (cost >= 100_000 && cost < 200_000) {
  sum = 2000 + (15 / 100) * (cost - 100_000);
  console.log(sum);
} else if (cost > 200_000) {
  sum = 5000 + (10 / 100) * (cost - 200_000);
  console.log(sum);
}

//number 6
let num = +prompt("enter a number");
let sum = 0;
let n1 = num;
while (n1 > 0) {
  sum += n1 % 10;
  n1 = Math.floor(n1 / 10);
}
console.log(sum);
