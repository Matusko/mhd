import {Stop} from "../models/stop.type";
import {NextBus} from "../models/next-bus.model";
import moment = require("moment");
/**
 * Created by matus on 8.1.2018.
 */

export class FilterNextArrivalsService {

    static filter(stop: Stop | null): NextBus[] | null {

        let nbs: NextBus[] = [];

        if (stop == null) {
            return null;
        }

        stop.lines.forEach(line => {

            console.log(line);
            //TODO not only weekendArrivals

            let nbsForOneLine: NextBus[] = line.weekendArrivals.map(a => {
                return {
                    line: line.lineNumber,
                    time: a.time,
                    metaData: a.metaData
                };
            });

            nbs = [ ...nbs, ...nbsForOneLine];

        });


        return nbs;

    }

}