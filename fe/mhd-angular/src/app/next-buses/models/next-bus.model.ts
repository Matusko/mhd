import * as moment from 'moment';
import Moment = moment.Moment;
import {BusInfo} from "./bus-info.model";
/**
 * Created by matus on 8.1.2018.
 */

export interface NextBus {
  line: number;
  direction: string;
  time: Moment;
  metaData?: BusInfo[];
}
