const Router = require('koa-router')
const { query } = require('../utils/mysql-util')
async function selectAllData( ) {
    let sql = 'SELECT * FROM acountinfo'
    let dataList = await query( sql )
    return dataList
}

async function getData() {
    let dataList = await selectAllData()
    console.log( dataList )
}
// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
    ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
    ctx.body = 'helloworld page!'
}).get('/testejs',async (ctx)=>{
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
}).get('/dbtest',async (ctx)=>{
    // getData()
    let dataList = await selectAllData();
    ctx.body=dataList
})

module.exports=page
