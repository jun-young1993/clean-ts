const fs = require('fs')


const tsconfig = JSON.parse(fs.readFileSync(`${__dirname}/tsconfig.json`, 'utf8'));
console.log(tsconfig);