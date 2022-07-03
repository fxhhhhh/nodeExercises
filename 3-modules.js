//CommonJS, every file is module (by default)
//Modules encapsulate code
// const sayHi =(name)=>{
//     console.log(`hello ${name}`);
//     console.log('');
//     console.log(``);
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
console.log(data);
console.log(data.singlePerson);
sayHi(data.singlePerson.name)
require('./7-mindgrenade')
sayHi(names.john)
sayHi(names.peter) 

