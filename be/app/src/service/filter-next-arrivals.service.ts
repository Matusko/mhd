import {Stop} from "../models/stop.type";
import {NextBus} from "../models/next-bus.model";
import moment = require("moment");
import {CalculateNextDaysBusesService} from "./calculate-nextdays-buses.service";
/**
 * Created by matus on 8.1.2018.
 */

export class FilterNextArrivalsService {

    static filter(stop: Stop | null): NextBus[] | null {

        let nbs: NextBus[] = [];
        let dayShift: number = 0;

        if (stop == null) {
            return null;
        }

        while (nbs.length < 100 && dayShift <= 7) {
            stop.lines.forEach(line => {
                //TODO not only weekendArrivals

                let nbsForOneLine: NextBus[] = CalculateNextDaysBusesService.getBuses(line, dayShift);

                nbs = [ ...nbs, ...nbsForOneLine];
            });

            if(dayShift == 0) {
                nbs = nbs.filter(nb => moment().diff(nb.time, 'minutes') < 0);
            }

            dayShift++;
        }

        nbs.sort((nb1,nb2) => nb1.time.diff(nb2.time, 'minutes'));

        return nbs;

    }

}