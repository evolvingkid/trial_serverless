'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.createTodo = async (event) => {

    return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Created' }),
    }
}