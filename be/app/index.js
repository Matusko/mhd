'use strict';

const aws = require('aws-sdk');

exports.handler = (event, context, callback) => {
    console.log("teest");
    console.log(aws);

    let ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'}); //TODO wat is this 2012-10-08

    let params = {
        TableName: 'schedule',
        Key: {
            'firstName' : "first item",
        }
    };

    ddb.getItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
            let resp = {
                statusCode: '500',
                body: 'error '
            };
        } else {
            let resp = {
                statusCode: '500',
                body: data.Item
            };
            console.log("Success", data.Item);
        }
    });

    callback(null, resp);
};