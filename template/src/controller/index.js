const testService = require('../services/index')

const test = async ctx => {
  ctx.body = await testService.test()
}

module.exports ={
  test
}