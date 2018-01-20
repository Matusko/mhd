/**
 * Created by matus on 13.1.2018.
 */

import {Component, NgModule} from '@angular/core';
import {NextBusesService} from "./next-buses.service";
import {HttpClientModule} from "@angular/common/http";
import {DataScrollerModule} from 'primeng/primeng';
import {NextBus} from "./models/next-bus.model";
import {NextBusesItemModule} from "./next-bus-item/next-bus-item.component";
import {Observable} from 'rxjs/Rx';
import {DisplayableNextBus} from "./models/displayable-next-bus.model";
import * as moment from "moment";

@Component({
  selector: 'next-buses',
  templateUrl: './next-buses.component.html',
  providers: [NextBusesService]
})
export class NextBusesComponent {
  buses: NextBus[] = [];
  displayableBuses: DisplayableNextBus[] = [];

  constructor(private nextBusesService: NextBusesService) {
    nextBusesService.getNextBuses("aaa").subscribe(
      data => {
        this.buses = data;
        this.checkTime();
      },
      err => {
        console.log(err)
      }
    )
  }

  checkTime(): void {
    this.getDisplayableBuses();
    Observable.interval(1000).subscribe(x => {
      this.updateDisplayableBuses();
    });
  }

  getDisplayableBuses(): void {

    let now = moment();

    this.buses = this.buses.filter(bus => moment(bus.time).diff(now) >= 0);

    this.displayableBuses = this.buses.map(bus => {

      let displayableBus: DisplayableNextBus = {
        time: bus.time,
        line: bus.line,
        metaData: bus.metaData,
        remainingTime: moment(moment(bus.time).diff(now))
      };

      return displayableBus;
    })

  }

  updateDisplayableBuses(): void {

    let now = moment();

    this.displayableBuses.forEach(bus => bus.remainingTime = moment(moment(bus.time).diff(now)));

  }

}


@NgModule({
  declarations: [
    NextBusesComponent,
  ],
  imports: [
    HttpClientModule,
    NextBusesItemModule,
    DataScrollerModule
  ],
  exports: [
    NextBusesComponent
  ]
})
export class NextBusesModule { }
