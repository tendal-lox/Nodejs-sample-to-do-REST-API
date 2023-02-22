'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const {swagger, swagger_ui} = require('./schema/swaggerSchema')

module.exports.options = {}

module.exports = async function (fastify, opts) {

  await fastify.register(require('@fastify/swagger'), {swagger: swagger})

  await fastify.register(require('@fastify/swagger-ui'), swagger_ui)

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
