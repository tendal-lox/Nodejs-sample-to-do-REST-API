'use strict'

const { deleteOneData } = require('../schema/routesSchema')
const { deleteOneFunction } = require('../controller/routsFunction')

module.exports = async function (fastify) {
  fastify.delete('/:name', deleteOneData, deleteOneFunction)
}