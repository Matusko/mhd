'use strict';

var aws = require('aws-sdk');

exports.handler = (event, context, callback) => {
    console.log("teest");
    console.log(aws);
    callback(null, {
        statusCode: '200',
        body: 'The time in Los bratislava is: ',
    });
};