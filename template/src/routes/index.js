/*
 * @Author: zxj
 * @Date: 2020-12-01 15:40:51
 * @LastEditors: zxj
 * @LastEditTime: 2020-12-01 15:44:15
 * @FilePath: /mall-tool/src/routes/index.js
 */
const router = require('koa-router')()
const controller = require('../controller/index')
router.get('/api/test', controller.test)
module.exports = router