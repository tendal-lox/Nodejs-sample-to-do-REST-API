'use strict'

const mongoose = require('mongoose');

const student = new mongoose.Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 16, index: true  },
  });

module.exports = mongoose.model('members', student);