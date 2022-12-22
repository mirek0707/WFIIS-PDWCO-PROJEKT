require('dotenv').config()
const neo4j = require('neo4j-driver');

const uri = process.env.URI

const user = process.env.USERNAME

const password = process.env.PASSWORD

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {
    maxConnectionPoolSize: 100,
    connectionTimeout: 30000, // 30 seconds
});

module.exports.driver = driver;