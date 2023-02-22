// const supertest = require('supertest')
// const { test } = require('tap')
// const { build } = require('./helper')
// var _ = require('lodash');

// test('check status of given name and age on /insertdata', async (t) => {
//     // Arrange
//     const app = await build(t)

//     // Act
//     const reply = await supertest(app.server).post('/insertdata')
//     .send({
//         name: 'ali',
//         age: '24'
//     })

//     // Assert
//     t.ok(reply.body.name)
//     t.ok(reply.body.age)
//     t.equal(reply.statusCode, 200)
// })

// test('check status of missing name and age on /insertdata', async (t) => {
//     // Arrange
//     const app = await build(t)

//     const bodyData = [
//         {name: 'ali'},
//         {age: '24'},
//         {}
//     ]

//     for (const data in bodyData) {
//         // Act
//         const reply = await supertest(app.server).post('/insertdata')
//         .send(data)

//         // Assert
//         t.equal(reply.statusCode, 415)
//     }
// })

// test('should push data in array instead of mongoose data base', async (t) => {
//     // Arrange
//     const app = await build(t)
//     const pushedItems = []

//     // Act
//     const reply = await supertest(app.server).post('/insertdata')
//     .send({
//         name: 'ali',
//         age: 24
//     })
//     const {name, age} = reply.body
//     const combinedInputObject = _.merge(name, age)
//     const list = pushedItems.push(combinedInputObject)

//     // Assert
//     t.equal(list, 1)
// })