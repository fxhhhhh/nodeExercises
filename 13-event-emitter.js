const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response',()=>{

    console.log('some other logic');
})

CustomEmitter.emit('response');