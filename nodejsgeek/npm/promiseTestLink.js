function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('成功');
            } else {
                reject('第' + round + '轮失败');
            }
        }, 500);

    });
}

let promise = interview(1).then((res) => {
    return interview(2);
}).then(()=>{
    return interview(3);
}).then(()=>{
    console.log('成功');
})
.catch((err) => {
    console.log(err);
})