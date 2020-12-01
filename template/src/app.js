/*
 * @Author: zxj
 * @Date: 2020-12-01 15:40:30
 * @LastEditors: zxj
 * @LastEditTime: 2020-12-01 15:40:32
 * @FilePath: /mall-tool/app.js
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./routes/index')
const cors = require('koa2-cors')
app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.listen(3000)