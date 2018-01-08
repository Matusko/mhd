import {Arrival} from "./arrival.type";
/**
 * Created by matus on 7.1.2018.
 */

export interface Line {
    lineNumber: number;
    direction: string;
    normalDayArrivals: Arrival[];
    weekendArrivals: Arrival[];
    holidayArrivals: Arrival[];
}