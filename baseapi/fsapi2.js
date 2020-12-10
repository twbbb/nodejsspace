const fs = require('fs');

// const rs = fs.createReadStream('./test1.js');
// rs.pipe(process.stdout)

const ws = fs.createWriteStream('./test1.js');
const tid = setInterval(() => {
    const num = parseInt(Math.random()*10);
    console.log(num);
    if(num<8){
        ws.write(num+'');
    }else{
        
        clearInterval(tid);
        ws.end();
    }
}, 200);

// console.log(tid);
ws.on('finish',()=>{
    console.log('end');
})
