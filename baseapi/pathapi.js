const path = require('path');
// console.log('path:'+path.root);


// normalize path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。
testnormal=>{
    console.log(path.normalize(__dirname+'\\.\\'));
    console.log(path.normalize('F:\\nodejsspace\\.\\baseapi\\'));
    console.log(path.normalize('C:/temp/foo/bar'));
    path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
    console.log(path.posix.normalize('/temp/foo/bar'));
}


//  testnormal;

//path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
//长度为零的 path 片段会被忽略。 如果连接后的路径字符串为长度为零的字符串，则返回 '.'，表示当前工作目录。
// console.log('join:'+path.join('C://temp','../test','','333'));

//path.resolve() 方法会将路径或路径片段的序列解析为绝对路径。
// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则会使用当前工作目录。
// 生成的路径会被规范化，并且尾部的斜杠会被删除（除非路径被解析为根目录）。
// 零长度的 path 片段会被忽略。
// 如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径。
// console.log('resolve:'+path.resolve('C:\\1','2\\'));
// console.log('resolve:'+path.resolve('1','','2\\'));
// console.log('resolve:'+path.resolve('..\\..\\1'));

// //path.sep 提供平台特定的路径片段分隔符
// console.log('sep:'+path.sep);




