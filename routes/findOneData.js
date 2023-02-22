'use strict'

const { findOneData } = require('../schema/routesSchema')
const { findOneFunction } = require('../controller/routsFunction')
  
module.exports = async (fastify) => {
    fastify.get('/:name', findOneData, findOneFunction)
}