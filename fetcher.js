/**
 * Takes a URL and a local file path as command line arguments.
 * Downloads the resource at the URL to the local path on your machine.
 * Prints out a success message, how many bytes, and saved to hat file.
 */

// Import Node file system
const fs = require('fs');
// Import request library
const request = require('request');

// Allows for inputing arguments through the comand line.
const arg = process.argv;
let argArr = arg.slice(2);

const urlData = argArr[0]

// Makes HTTP request
const info = request(urlData, (error, response, body) => {
    if(info) {
      const fileSize = body.length;
      // Writes data to file
      fs.writeFile(argArr[1], body, (err) => {
        if (error) {
          console.log(error);
        }
        console.log(`Downloaded and saved ${fileSize} bytes to ${argArr[1]}.`);
      }); 
    }
  }); 



