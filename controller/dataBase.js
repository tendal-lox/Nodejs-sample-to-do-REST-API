'use strict'

const student = require('../schema/mongooseSchema')
const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost/members')
    .then(_ => {
      console.log('connected')
    })
  }catch (err) {
      console.error(err)
  }

module.exports.creatRecord = async (name, age) => {
    new student({name: name, age: age}).save()
}

module.exports.updateRecord = async (name, newAge) => {
    return await student.findOneAndUpdate({name: name}, {age: newAge})
}

module.exports.findAllRecord = async () => {
    return await student.find()
}

module.exports.findOneRecord = async (name) => {
    return await student.findOne({name: name})
}

module.exports.deleteRecord = async (name) => {
    return await student.findOneAndRemove({name: name})
}