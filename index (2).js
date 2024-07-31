//convert string into uppercase
let text = 'hello world i am naveera';
let result = text.toUpperCase();
console.log(result);

//find the length of string
let text1 = 'hello world i am naveera';
let result1 = text.length;
console.log(result1);


function replaceChar(inputString, oldChar, newChar) {
  let resultString = inputString.split(oldChar).join(newChar);
  return resultString;
}
let inputString = "hello world";
let oldChar = 'o';
let newChar = 'a';
let result3 = replaceChar(inputString, oldChar, newChar);
console.log("Original string:", inputString);
console.log("Modified string:", result);