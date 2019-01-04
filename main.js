const Koa = require('koa')
const path=require('path');
const router=require('./routers/index')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const staticPath = './static'


const app = new Koa()
// 配置控制台日志中间件
app.use(koaLogger())

// 配置ctx.body解析中间件
app.use(bodyParser())
app.use(koaStatic(
    path.join( __dirname,  staticPath)
))
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(9999,()=>{
    console.log('[demo] start-quick is starting at port 9999')
})
