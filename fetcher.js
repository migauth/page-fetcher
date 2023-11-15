/**
 * Node app
 * Takes a URL and a local file path as command line arguments.
 * Downloads the resource at the URL to the local path on your machine.
 * Prints out a success message, how many bytes, and saved to hat file.
 */

const fs = require('fs');
const request = require('request');

// Allows for inputing arguments through the comand line.
const arg = process.argv;
let argArr = arg.slice(2);

const urlData = argArr[0]

// console.log(argArr[0]);
// console.log(argArr[1]);
// console.log(argArr);
// console.log(fs);

let data = "";

// Makes HTTP request
const info = request(urlData, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Response status code if a response was received
    console.log('body:', body); // Print the HTML for the provided homepage.
    if(info) {
      data = body;
      fs.writeFile(argArr[1], data, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Data has been written to file successfully.");
      }); 
    }
  }); 





// console.log(info);



// Writes data to file
fs.writeFile(argArr[1], data, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Data has been written to file successfully.");
}); 