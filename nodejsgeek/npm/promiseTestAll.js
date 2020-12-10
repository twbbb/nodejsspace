function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('成功');
            } else {
                reject('第' + round + '轮失败');
            }
        }, 500);

    });
}
Promise.all([interview('11'),
    interview('22')
]).then(()=>{
    console.log('成功');
}).catch((err)=>{
    console.log(err);
})