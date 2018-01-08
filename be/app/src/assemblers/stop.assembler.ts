import {Stop} from "../models/stop.type";
import {Line} from "../models/line.type";
import {Arrival} from "../models/arrival.type";
import {Info} from "../models/info.type";
import * as moment from 'moment';
/**
 * Created by matus on 8.1.2018.
 */

export class StopAssembler {

    static assembleStopFromDb(stopDb: any): Stop {
        return {
           name: stopDb.name.S,
           lines: StopAssembler.assembleLinesFromDb(stopDb.lines.L)
        }
    }

    static assembleLinesFromDb(linesArr: any[]): Line[] {
        return linesArr.map(lineObj => StopAssembler.assembleLineFromDb(lineObj.M));
    }

    static assembleLineFromDb(lineObj: any): Line {
        return {
            lineNumber: lineObj.lineNumber.N,
            direction: lineObj.direction.S,
            normalDayArrivals: StopAssembler.assembleArrivalsFromDb(lineObj.normalDayArrivals.L),
            weekendArrivals: StopAssembler.assembleArrivalsFromDb(lineObj.weekendArrivals.L),
            holidayArrivals: StopAssembler.assembleArrivalsFromDb(lineObj.holidayArrivals.L)
        }
    }

    static assembleArrivalsFromDb(arrivalsObj: any): Arrival[] {
        return  arrivalsObj.map((arrivalObj: any) => StopAssembler.assembleArrivalFromDb(arrivalObj.M));
    }

    static assembleArrivalFromDb(arrivalObj: any): Arrival {
        return  {
            time: moment(arrivalObj.time.S, 'HH:mmZ '),
            metaData: StopAssembler.assembleInfosFromDb(arrivalObj.metaData.L)
        }
    }

    static assembleInfosFromDb(infosObj: any): Info[] {
        return  infosObj.map((infoObj: any) => StopAssembler.assembleInfoFromDb(infoObj.M));
    }

    static assembleInfoFromDb(infoObj: any): Info {
        return  {
            additionalInfo: infoObj.additionalInfo.S,
            message: infoObj.message.S
        }
    }

}