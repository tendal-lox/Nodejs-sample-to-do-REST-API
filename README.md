# Nodejs sample to-do REST API

In this module using swagger you can enter your name and age in database, update your age by mentioning name, find all your records in database, find a specific record by giving name and also You can delete a specific record by giving it a name.

## Features

- Save your name and age in the database
- Update your record (property age)
- Find all your saved records in the database
- Find specific stored record in database
- Delete a specific stored record in the database

## Tech

This module uses a number of open source projects to work properly:

- [Node.js] - evented I/O for the backend
- [Swagger] - Simplifying API development
- [Mongoose] - elegant mongodb object modeling for node.js
- [Fastify] - Fast and low overhead web framework, for Node.js
- [Lodash] - A modern JavaScript utility library delivering modularity, performance & extras.

✨ This project was bootstrapped with Fastify-CLI. ✨  

## Installation guide for the user

```sh
git clone git@github.com:tendal-lox/Nodejs-sample-to-do-REST-API.git
cd sampleto-do
```

> Note: You need to install fastify-cli for this module to work properly.
## Installation guide for developers

```sh
npm install Nodejs-sample-to-do-REST-API
npm run dev
```

To start the app in dev mode.\
Open [http://localhost:3000/docs/static/index.html](http://localhost:3000/docs/static/index.html) to view it in the browser.

## Bugs are being fixed

There is no any problem in the production code, but there is a problem in the test. Since there is no database in the test file, when you run npm test you will always encounter a database connection problem.

## License

MIT

[node.js]: <http://nodejs.org>
[Swagger]: <https://swagger.io/>
[Mongoose]: <https://mongoosejs.com/>
[Fastify]: <https://www.fastify.io/>
[Lodash]: <https://lodash.com/>