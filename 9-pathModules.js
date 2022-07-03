const path = require('path');

console.log(path.sep);


const pathFile = path.join('./content','subfolder','test.txt');
console.log(pathFile);


const base = path.basename(pathFile);
console.log(base);

var abs = path.resolve('/foo','/bar','baz');
console.log(abs);
abs = path.resolve('foo','bar','baz');
console.log(abs);
