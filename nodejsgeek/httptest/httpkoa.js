const Koa = require('koa');
const mount= require('koa-mount');
const fs = require('fs');
const app = new Koa();

app.use(mount('/favicon.ico',function(ctx){
    ctx.status=200;
}));
app.use(mount('/',function(ctx){
    ctx.body=fs.readFileSync(__filename,'utf-8');
}));
// 响应
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);