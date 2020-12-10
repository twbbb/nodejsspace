// Buffer 对象用于表示固定长度的字节序列

// console.log(Buffer.alloc(10));
// console.log(Buffer.alloc(20,1));
// console.log(Buffer.allocUnsafe(20));
// console.log(Buffer.from([1,2,3]));
// console.log(Buffer.from('test'));
// console.log(Buffer.from('test','base64'));


// //静态方法
// console.log(Buffer.byteLength(Buffer.from('test')));
// console.log(Buffer.byteLength(Buffer.from('测试')));//6 中文三字节

// console.log(Buffer.isBuffer(Buffer.from('test')));
// console.log(Buffer.isBuffer('111'));


// const buf1 =Buffer.from('This');
// const buf2 = Buffer.from(' is');
// const buf3 = Buffer.from(' test');
// console.log(Buffer.concat([buf1,buf2,buf3]).toString());

// //长度申请空间
// console.log(buf1.length);
// console.log(Buffer.alloc(10).length);

// console.log(buf1.toString());//默认utf-8
// console.log(buf1.toString('base64'));

// const buffill = Buffer.alloc(10);
// console.log(buffill);

// console.log(buffill.fill(5300,2,6));

const buf1 =Buffer.from('This');
const buf2 =Buffer.from('This@');
console.log(buf1.equals(buf2));

console.log(buf2.indexOf('is@'));

//中文乱码问题
const zwbuf = Buffer.from('测试中文哈');
// for(let i=0;i<zwbuf.length;i+=5){
//     const b = Buffer.allocUnsafe(5);
//     zwbuf.copy(b,0,i);
//     console.log(b.toString());
// }
const StringDecoder = require('string_decoder').StringDecoder;
// console.log(StringDecode);
const decoder = new StringDecoder('utf8');
//中文乱码问题
for(let i=0;i<zwbuf.length;i+=5){
    const b = Buffer.allocUnsafe(5);
    zwbuf.copy(b,0,i);
    console.log(zwbuf.toString());
    console.log(decoder.write(b));
}