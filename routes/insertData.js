'use strict'

const { insertData } = require('../schema/routesSchema')
const { insertFunction } = require('../controller/routsFunction')
  
module.exports = async (fastify) => {
    fastify.post('/insertdata', insertData, insertFunction)
}