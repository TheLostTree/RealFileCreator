const crypto = require('crypto');
const fs = require('fs');

let args = [...process.argv.slice(2)];
console.log(process.argv)
let [size, fileName] = args;
if(!size || !fileName) {
  console.log('Please provide size and file size');
  process.exit(1);
}

size = Number(size);
if(size == NaN) {
    console.log('Please provide a valid size');
    process.exit(1);
}

let buf = Buffer.allocUnsafe(size);
crypto.randomFillSync(buf);
fs.writeFileSync(fileName, buf);