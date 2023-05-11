const path = require('path');

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);


console.log(path.basename(__filename, '.jsx'))

console.log(path.extname(__filename))

console.log(path.isAbsolute(__filename))

console.log(path.join(__dirname, '/huangxi/', 'index.cpp'))

console.log(path.parse(__filename))