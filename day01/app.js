const fs = require("fs");

// Function to extract integers from a string
function extractIntegers(inputString) {
  const matches = inputString.match(/\d/g);
  const extractedInteger = matches ? matches.join("") : "";

  return extractDigits(extractedInteger);
}

// Function to extract only the first and last digits if the integer has more than 2 digits
function extractDigits(integer) {
  if (integer.length > 2) {
    return integer[0] + integer[integer.length - 1];
  }
  return integer;
}

// Specify the path to your .txt file
const filePath = "input.txt";

// Read the contents of the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Split the text into an array of strings based on newline characters
  const csv = data.split("\n");

  // Process each line of the CSV
  const resultArray = csv.map((line) => extractIntegers(line));

  // Display the results
  resultArray.forEach((result, index) => {
    console.log(`Line ${index + 1}: ${result}`);
  });
});
