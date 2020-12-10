// var glob = require("glob");
 

var promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error('fail'));
    }, 500);
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

console.log(promise);

setTimeout(() => {
   console.log(promise);
}, 500);