import * as moment from 'moment';
import Moment = moment.Moment;
import {Info} from "./info.type";
/**
 * Created by matus on 8.1.2018.
 */

export interface NextBus {
    line: number;
    time: Moment;
    direction: string;
    metaData?: Info[];
}