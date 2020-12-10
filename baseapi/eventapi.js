const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter  = new MyEmitter();

myEmitter.on('test',()=>{
    console.log('emitter');
});

myEmitter.on('testerr',(err,arg)=>{
    console.log(err);
    console.log(arg);

});

//一次调用
myEmitter.once('testonce',(err,arg)=>{
    console.log(err);
    console.log('testonce');

});

setInterval(() => {
    myEmitter.emit('testonce');
}, 500);
// myEmitter.emit('testerr');
// myEmitter.emit('testerr',new Error('errrrrrr'),'aaaa');