import AWS = require('aws-sdk');
import {StopAssembler} from "../../assemblers/stop.assembler";
import {Stop} from "../../models/stop.type";
/**
 * Created by matus on 8.1.2018.
 */

export class GetStopFromDbService {

    static getStop(name: string, successClb: (stopObj: Stop | null ) => void, errorClb: (err: any) => void): any {

        AWS.config.update({region: 'eu-west-1'}); // TODO could this be configurable or inherited during cloud formation procesing

        let ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'}); //TODO wat is this 2012-10-08

        let params = {
            TableName: 'stop',
            Key: {
                'name' : {
                    "S": name
                },
            }
        };

        ddb.getItem(params, function(err, data) {
            if (err) {
                console.log("Error", err);
                errorClb(err);
            } else {
                console.log("Success", data.Item);
                if ( data.Item) {
                    successClb(StopAssembler.assembleStopFromDb(data.Item));
                } else {
                    successClb(null);
                }
            }
        });
    }

}
