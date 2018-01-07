import AWS = require('aws-sdk');
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString, GraphQLNonNull
} from 'graphql';


export let handler = (event: any, context: any, callback: any) => {

    AWS.config.update({region: 'eu-west-1'}); // TODO could this be configurable or inherited during cloud formation procesing

    let ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'}); //TODO wat is this 2012-10-08

    const getGreeting = (firstName: any) => `Hello, ${firstName}.`;

    const schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'RootQueryType', // an arbitrary name
            fields: {
                // the query has a field called 'greeting'
                greeting: {
                    // we need to know the user's name to greet them
                    args: { firstName: { name: 'firstName', type: new GraphQLNonNull(GraphQLString) } },
                    // the greeting message is a string
                    type: GraphQLString,
                    // resolve to a greeting message
                    resolve: (parent, args) => getGreeting(args.firstName)
                }
            }
        }),
    });

    graphql(schema, event.queryStringParameters.query)
        .then(
            result => console.log(result),
            err => console.log(err)
        );

    if (event.queryStringParameters && event.queryStringParameters.firstName) {
        let params = {
            TableName: 'schedule',
            Key: {
                'firstName' : {
                    "S": event.queryStringParameters.firstName
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

                if (data.Item) {
                    callback(null, {
                        statusCode: '200',
                        body: JSON.stringify(data.Item)
                    });
                } else {
                    callback(null, {
                        statusCode: '404',
                        body: JSON.stringify({"message": "resource not found"})
                    });
                }

            }
        });
    } else {
        callback(null, {
            statusCode: '400',
            body: JSON.stringify({"message": "insert query param"})
        });
    }


};