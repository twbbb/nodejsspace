const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter  = new MyEmitter();

function fn1(){
    console.log('test1');
}
function fn2(){
    console.log('test2');
}

myEmitter.on('test',fn1);
myEmitter.on('test',fn2);

setInterval(() => {
    myEmitter.emit('test');
}, 500);

setTimeout(() => {
    // myEmitter.removeListener('test',fn1);  
    myEmitter.removeAllListeners('test');

}, 1501);