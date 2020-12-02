const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const router = require('./routes/index')

const app = new Koa()
app.use(cors())
app.use(bodyParser())
app.use(router.routes())

app.listen(3000)