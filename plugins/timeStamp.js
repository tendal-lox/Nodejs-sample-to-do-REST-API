const fp = require('fastify-plugin')

module.exports = fp(async (fastify) => {
    fastify.decorate('timeStamp', _ => Date.now())
})