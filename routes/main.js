const router = require('koa-router')();

const routers = router
    .get('/', async (ctx) => {
        const title = 'main';
        await ctx.render('main', {
            title
        })
    })

module.exports = routers;