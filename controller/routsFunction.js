'use strict'

const DB = require('./dataBase')

exports.insertFunction = async (req, reply) => {
    const {name, age} = req.body
    
    if (!name || !age) {
        return reply.code(415)
    }

    await DB.creatRecord(name, age)

    // return 'Your data pushed successfully'

    return {
        name: name,
        age: age
    }
}

exports.updateFunction = async (req, reply) => {
    const name = req.body.name
    const newAge = req.body.newAge

    if (!name || !newAge) {
        return reply.code(404)
    }
    
    await DB.updateRecord(name, newAge)
    
    // return 'Your data chaged successfully'

    return {
        name: name,
        newAge: newAge
    }
}

exports.findAllFunction = async (req, reply) => {
    const allRecord = await DB.findAllRecord()
    
    if (!allRecord) {
        reply.code(404)
    }
    return allRecord
}

exports.findOneFunction = async (req, reply) => {
    const name = req.params.name
    const userRecord = await DB.findOneRecord(name)
    
    if (userRecord) {
        return `you have one record for ${name}: ${userRecord}`
    }else {
        return `you dont have any record for ${name}`
    }
}

exports.deleteOneFunction = async (req, reply) => {
    const name = req.body.name

    const UserValid = await DB.findOneRecord(name)

    if (!UserValid) {
        return `There is no any record with name ${name}`
    }
    
    await DB.deleteRecord(name)
    
    return `${name}'s record was successfully deleted`
}