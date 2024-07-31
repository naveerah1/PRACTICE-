//genertae random number between 1 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = getRandomNumber();
console.log("Random number between 1 and 100:", randomNumber);

//rounds a number to the nearest integer
function roundToNearestInteger(number) {
  return Math.round(number);
}
let number = 4.7;
let roundedNumber = roundToNearestInteger(number);
console.log("Original number:", number);
console.log("Rounded number:", roundedNumber);

//square eoot of a number
function findSquareRoot(number) {
  return Math.sqrt(number);
}
let number1 = 16;
let squareRoot = findSquareRoot(number);
console.log("The square root of", number, "is", squareRoot);

