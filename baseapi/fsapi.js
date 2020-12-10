const fs = require('fs');

//删除文件
fs.unlink('.\\testjs.js',(error)=>{
    if(error) throw error;
    console.log('文件删除');
})

// fs.readFile(__filename,'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log('22222222');
// });

// const data = fs.readFileSync(__filename,'utf8');
// console.log(data);

// fs.writeFile('.\\testjs.js','this is test','utf8',(err)=>{
//     if(err) throw err;
//     console.log('写入成功');
// });


// fs.stat(__filename,(err,stats )=>{
//     if(err) throw err;
//     console.log(stats.isDirectory() );
//     console.log(stats.isFile() );
//     console.log(stats );
// });

// fs.rename('.//testjs.js','test1.js',(err)=>{

// });

// fs.readdir('.\\',(err,files)=>{
//     console.log(files);
// })

// fs.mkdir('.\\tttt',(err)=>{

// })

// fs.rmdir('.\\tttt',(err)=>{})
// fs.watch('.',{recursive:true},(eventType ,filename)=>{
//     console.log('eventType:'+eventType);
//     console.log('filename:'+filename);
// })