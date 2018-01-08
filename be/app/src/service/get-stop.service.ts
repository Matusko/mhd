import {Stop} from "../models/stop.type";
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString, GraphQLNonNull
} from 'graphql';
import {GetStopFromDbService} from "./db-layer/get-stop-from-db.service";
/**
 * Created by matus on 8.1.2018.
 */

export class GetStopService {

    static getStop(query: string, successClb: (stopObj: Stop | null) => void, errorClb: (err: any) => void): void {

        const getStop = (stopName: string) => {

            GetStopFromDbService.getStop(stopName, successClb, errorClb);

        };

        const schema = new GraphQLSchema({
            query: new GraphQLObjectType({
                name: 'StopsQuery',
                fields: {
                    // the query has a field called 'greeting'
                    getStopInfo: {
                        // we need to know the user's name to greet them
                        args: { stopName: { name: 'stopName', type: new GraphQLNonNull(GraphQLString) } },
                        // the greeting message is a string
                        type: GraphQLString,
                        // resolve to a greeting message
                        resolve: (parent, args) => getStop(args.stopName)
                    }
                }
            }),
        });

        //TODO wtf resolve promise??

        graphql(schema, query).then(
            succ => console.log(succ),
            err => console.log("err"  + err),
        ).catch(err => console.log("catch"  + err));
    }

}
