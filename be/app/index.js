'use strict';

const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    console.log("teest");
    console.log(AWS);

    let ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'}); //TODO wat is this 2012-10-08

    let params = {
        TableName: 'schedule',
        Key: {
            'firstName' : {
                "S": "first item"
            },
        }
    };

    let resp = {
        statusCode: '500',
        body: "this is weird"
    };

    ddb.getItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
            resp = {
                statusCode: '400',
                body: err
            };
        } else {
            resp = {
                statusCode: '200',
                body: data.Item
            };
            console.log("Success", data.Item);
        }
    });

    callback(null, resp);
};