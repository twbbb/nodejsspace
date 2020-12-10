const game = require('./game');
// let playAction = process.argv[process.argv.length-1];

// let result = game(playAction);
// console.log(result);
let times = 0;
process.stdin.on('data',(data)=>{
    let playAction=data.toString().trim();
    let result = game(playAction);
   
    if(result==1){
        times++;        
    }
    if(times>=3){
         console.log('我不玩了');
         process.exit();   
    }
});


