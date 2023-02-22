const supertest = require('supertest')
const { test } = require('tap')
const { build } = require('./helper')

test('should reply record with status code 200 on /', async (t) => {
    // Arrange
    const app = await build(t)

    // Act
    const allRecordInDB = [
        {name: 'ali', age: '24'}
    ]

    for (const record in allRecordInDB) {
        const reply = await supertest(app.server).get('/')
        .send(record)

        // Assert
        t.equal(reply.statusCode, 200)
    }
})

// test('check if there is nothing to reply on /', async (t) => {
//     // Arrange
//     const app = await build(t)

//     // Act
//     const allRecordInDB = []
    
//     const reply = await supertest(app.server).get('/')
//     .send(allRecordInDB)

//     // Assert
//     t.equal(reply.statusCode, 404)
// })