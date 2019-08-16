const path = require('path');

//Base file/directory name
console.log(path.basename(__filename)); // path_demo.js
console.log(path.dirname(__filename)); // /home/sadness/Desktop/sad/August/15 aug/node-beginning/reference

console.log(path.basename(__dirname)); // reference

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename).base); // path_demo.js
/*

{ root: '/',
  dir:
   '/home/sadness/Desktop/sad/August/15 aug/node-beginning/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo' }

*/

// Concatenate path
console.log(path.join(__dirname, 'test', 'hellow.html'));
// /home/sadness/Desktop/sad/August/15 aug/node-beginning/reference/test/hellow.html



