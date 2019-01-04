const Router = require('koa-router')
const page=require('./page')
const home =require('./home')
// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
module.exports=router;
