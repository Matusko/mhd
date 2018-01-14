import {PipeTransform, Pipe} from "@angular/core";
import Moment = moment.Moment;
import moment = require("moment");
/**
 * Created by matus on 14.1.2018.
 */

@Pipe({name: 'nextBusTime'})
export class NextBusTimePipe implements PipeTransform {
  transform(timeIsoStr: string): string {

    return moment(timeIsoStr).format('DD.MM.YYYY HH:mm');
  }
}
