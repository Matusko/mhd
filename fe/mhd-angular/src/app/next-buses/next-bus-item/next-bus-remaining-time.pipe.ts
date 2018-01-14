import {PipeTransform, Pipe} from "@angular/core";
import Moment = moment.Moment;
import * as moment from "moment";
/**
 * Created by matus on 14.1.2018.
 */

@Pipe({name: 'nextBusRemainingTime'})
export class NextBusRemainingTimePipe implements PipeTransform {

  readonly minuteInSeconds: number = 60;
  readonly hourInMinutes: number = 60;
  readonly hourInSeconds: number = this.minuteInSeconds * this.hourInMinutes;
  readonly dayInHours: number = 24;
  readonly dayInSeconds: number = this.hourInSeconds * this.dayInHours;

  transform(value: Moment): string {

    value.second(0);
    value.utc(false);

    if (value.unix() < this.minuteInSeconds) {
      return "menej ako minuta";
    }

    if (value.unix()/this.minuteInSeconds < this.hourInMinutes) {
      return value.minutes() + "min";
    }

    if (value.unix()/this.hourInSeconds < this.dayInHours) {
      return value.hours() + "h " + value.minutes() + "min";
    }


    return Math.floor(value.unix()/this.dayInSeconds) + "d " + value.hours() + "h " + value.minutes() + "min";
  }
}
