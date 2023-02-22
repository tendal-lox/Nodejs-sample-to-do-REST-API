// const supertest = require('supertest')
// const { test } = require('tap')
// const { build } = require('./helper')

// test('check status of given name and newAge on /update:name', async (t) => {
//     // Arrange
//     const app = await build(t)

//     // Act
//     const reply = await supertest(app.server).put('/update:name')
//     .send({
//         name: 'ali',
//         newAge: '24'
//     })
    
//     // Assert
//     t.ok(reply.body.name)
//     t.ok(reply.body.newAge)
//     t.equal(reply.statusCode, 200)
// })

// test('check status of missing name on /update:name', async (t) => {
//     // Arrange
//     const app = await build(t)

//     const bodyData = [
//         {name: 'ali'},
//         {newAge: '25'},
//         {}
//     ]

//     for (const data in bodyData) {
//         // Act
//         const reply = await supertest(app.server).post('/update:name')
//         .send(data)

//         // Assert
//         t.equal(reply.statusCode, 404)
//     }
// })