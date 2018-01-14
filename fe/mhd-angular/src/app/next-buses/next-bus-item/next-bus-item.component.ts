/**
 * Created by matus on 13.1.2018.
 */

import {Component, Input, NgModule} from '@angular/core';
import {DisplayableNextBus} from "../models/displayable-next-bus.model";
import {NextBusRemainingTimePipe} from "./next-bus-remaining-time.pipe";
import {NextBusTimePipe} from "./next-bus-time.pipe";
@Component({
  selector: 'next-bus-item',
  templateUrl: 'next-bus-item.component.html',
  styleUrls: ['next-bus-item.component.scss']
})
export class NextBusItemComponent {
  @Input() nextBus: DisplayableNextBus;

}

@NgModule({
  declarations: [
    NextBusItemComponent,
    NextBusTimePipe,
    NextBusRemainingTimePipe
  ],
  exports: [
    NextBusItemComponent,
    NextBusTimePipe,
    NextBusRemainingTimePipe
  ]
})
export class NextBusesItemModule { }

