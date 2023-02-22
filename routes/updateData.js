'use strict'

const { update } = require('../schema/routesSchema')
const { updateFunction } = require('../controller/routsFunction')
  
module.exports = async (fastify) => {
    fastify.put('/update:name', update, updateFunction)
}