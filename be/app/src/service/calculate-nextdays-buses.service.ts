import {Line} from "../models/line.type";
import {Arrival} from "../models/arrival.type";
import moment = require("moment");
import {NextBus} from "../models/next-bus.model";
import Moment = moment.Moment;
/**
 * Created by matus on 8.1.2018.
 */

export class CalculateNextDaysBusesService {

    static getBuses(line: Line, dayShift: number): NextBus[] {

        let day = moment();
        day.add(dayShift, 'd');

        const transformToNextBus = (a: Arrival): NextBus => {
            let b: Moment = a.time.clone();
            b.add(dayShift, 'd');
            return {
                line: line.lineNumber,
                time: b,
                metaData: a.metaData
            };
        };

        //-TODO holidays and change weekend back to weekend

        if (day.weekday() === 6 || day.weekday() === 0) {
            return line.weekendArrivals.map(transformToNextBus);
        } else {
            return line.normalDayArrivals.map(transformToNextBus);
        }

    }

}