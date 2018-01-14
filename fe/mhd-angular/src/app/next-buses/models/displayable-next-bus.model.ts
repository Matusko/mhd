import * as moment from 'moment';
import Moment = moment.Moment;
import {NextBus} from "./next-bus.model";
/**
 * Created by matus on 8.1.2018.
 */

export interface DisplayableNextBus extends NextBus{
  remainingTime: Moment;
}
