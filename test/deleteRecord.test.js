const supertest = require('supertest')
const { test } = require('tap')
const { build } = require('./helper')

test('check status of given name on /:name', async (t) => {
    // Arrange
    const app = await build(t)

    // Act
    const reply = await supertest(app.server).delete('/:name')
    .send({
        name: 'ali'
    })
    
    // Assert
    t.equal(reply.body.name, 'ali')
})