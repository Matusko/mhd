/**
 * Created by matus on 13.1.2018.
 */

import {Component, Input, NgModule} from '@angular/core';
import {DisplayableNextBus} from "../models/displayable-next-bus.model";
import {NextBusRemainingTimePipe} from "./next-bus-remaining-time.pipe";
import {NextBusTimePipe} from "./next-bus-time.pipe";
import {AccordionModule} from 'primeng/primeng';
import {CommonModule} from "@angular/common";

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
    NextBusRemainingTimePipe,
  ],
  imports: [
    AccordionModule,
    CommonModule
  ],
  exports: [
    NextBusItemComponent,
    NextBusTimePipe,
    NextBusRemainingTimePipe
  ]
})
export class NextBusesItemModule { }

