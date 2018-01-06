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


    ddb.getItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
            callback(null, {
                statusCode: '500',
                body: err
            });
        } else {
            console.log("Success", data.Item);
            callback(null, {
                statusCode: '200',
                body: data.Item
            });
        }
    });

};