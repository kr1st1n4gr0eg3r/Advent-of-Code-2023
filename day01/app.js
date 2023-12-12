const fs = require('fs');

// Read the contents of input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the content into an array of lines
  const lines = data.split('\n');

  // Use map on lines array
  const results = lines.map(str => {
    const numericOnly = str.replace(/[^0-9]/g, '');
    return numericOnly;
  });

  const updatedResults = results.map(str => {
    // check if the string has only one integer
    const match = str.match(/\d+/);

    if (match && match[0].length === str.length) {
      // if it only has one integer, add that number to the string
      return str + parseInt(match[0], 10);
    } else {
      // otherwise return string
      return str;
    }
  });