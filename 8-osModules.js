const os = require('os');

//info about curr user
const user = os.userInfo();

console.log(user);

// method return the system uptime in seconds

console.log(os.uptime());

const currOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currOS);
