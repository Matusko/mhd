import AWS = require('aws-sdk');


export let handler = (event: any, context: any, callback: any) => {

    console.log("teest");

    AWS.config.update({region: 'eu-west-1'});

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
                body: JSON.stringify(err)
            });
        } else {
            console.log("Success", data.Item);
            callback(null, {
                statusCode: '200',
                body: JSON.stringify(data.Item)
            });
        }
    });
};