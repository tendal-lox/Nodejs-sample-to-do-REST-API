'use strict'

const { findAllFunction } = require('../controller/routsFunction')

module.exports = async (fastify) => {
    fastify.get('/', findAllFunction)
}