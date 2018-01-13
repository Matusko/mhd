import {Info} from "./info.type";
import * as moment from 'moment';
import Moment = moment.Moment;

export interface Arrival {
    time: Moment;
    metaData?: Info[];

}