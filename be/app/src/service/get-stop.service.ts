import {Stop} from "../models/stop.type";
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString, GraphQLNonNull
} from 'graphql';
import {GetStopFromDbService} from "./db-layer/get-stop-from-db.service";
import {FilterNextArrivalsService} from "./filter-next-arrivals.service";
import {NextBus} from "../models/next-bus.model";
/**
 * Created by matus on 8.1.2018.
 */

export class GetStopService {

    static getStop(query: string, successClb: (buses: NextBus[] | null) => void, errorClb: (err: any) => void): void {

        const getFromDbSuccessClb = (stopObj: Stop | null): void => {

            let nbs = FilterNextArrivalsService.filter(stopObj);

            successClb(nbs);

        };

        const getStop = (stopName: string) => {

            GetStopFromDbService.getStop(stopName, getFromDbSuccessClb, errorClb);

        };

        const schema = new GraphQLSchema({
            query: new GraphQLObjectType({
                name: 'StopsQuery',
                fields: {
                    getStopInfo: {
                        args: { stopName: { name: 'stopName', type: new GraphQLNonNull(GraphQLString) } },
                        type: GraphQLString,
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
