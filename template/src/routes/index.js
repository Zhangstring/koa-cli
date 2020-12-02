const router = require('koa-router')()
const controller = require('../controller/index')

router.get('/api/test', controller.test)

module.exports = router