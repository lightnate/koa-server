const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

// 解析请求体
app.use(bodyParser())

app.use(cors())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

const PORT = 3000

app.listen(PORT, () => {console.log(`listening on port${PORT}`)})
