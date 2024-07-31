function parseJson(jsonString) {
  try {
    let parsedObject = JSON.parse(jsonString);
    console.log("Parsed object:", parsedObject);
    return parsedObject;
  } catch (error) {
   
    console.error("Error parsing JSON:", error.message);
    return null;
  }
}
let validJsonString = '{"name": "Alice", "age": 30}';
parseJson(validJsonString);
let invalidJsonString = '{"name": "Alice", "age": 30'; 
parseJson(invalidJsonString);

//2

class MissingArgumentError extends Error {
  constructor(argumentName) {
    super(`Missing required argument: ${argumentName}`);
    this.name = 'MissingArgumentError';
  }
}

function processData(data) {
  if (data === undefined || data === null) {
    throw new MissingArgumentError('data');
  }
  console.log("Processing data:", data);
}

try {
  processData();
} catch (error) {
  if (error instanceof MissingArgumentError) {
    console.error("Custom Error:", error.message);
  } else {
    console.error("Unexpected Error:", error);
  }
}
try {
  processData("Some data");
} catch (error) {
  console.error("Error:", error);
}

//3
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null; 
  }
}
let numerator = 10;
let denominator = 0;

let result = divide(numerator, denominator);
console.log("Result:", result);
