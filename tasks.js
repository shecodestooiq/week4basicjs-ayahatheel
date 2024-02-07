// Task 1
function checkVotingEligibility() {
  var age = 6; // Set age dynamically
  if (age >= 18) {
      console.log("You are eligible for voting.");
  } else {
      console.log("You are not eligible for voting.");
  }
}

// Task 2
function printNumbersWithWhile() {
  var number = 1;
  while (number <= 5) { 
      console.log(number);
      number++; 
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (var number = 2; number <= 10; number += 2) {
      console.log(number);
  }
}

// Task 4
function getDayName() {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      day = "off";
  }
  return day;
}

// Task 5
function sum(num1, num2) {
 console.log(num1 + num2);
}
sum (6,4);


// Task 6
const fruits = ["Tomatoes", "Apples", "Bananas", "Strawberries", "Watermelons"];
for (var fruit of fruits) {
  console.log(fruit);
}


module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
