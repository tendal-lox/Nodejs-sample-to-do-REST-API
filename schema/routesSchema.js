'use strict'

module.exports.insertData = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                age: {type: 'string'},
            }
        }
    }
}

module.exports.update = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                newAge: {type: 'string'}
            }
        }
    }
}

module.exports.findOneData = {
    schema: {
        params: {
            type: 'object',
            properties: {
                name: {type: 'string'},
            }
        }
    }
}

module.exports.deleteOneData = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: {type: 'string'},
            }
        }
    }
}