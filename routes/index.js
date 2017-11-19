const router = require('koa-router')();

const home = require('./home');
const main = require('./main');
const editor = require('./editor');

router.use('/home', home.routes(), home.allowedMethods());
router.use('/main', main.routes(), main.allowedMethods());
router.use('/editor', editor.routes(), editor.allowedMethods());

module.exports = router;