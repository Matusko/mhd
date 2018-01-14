/**
 * Created by matus on 13.1.2018.
 */

import {Component, Input} from '@angular/core';
import {DisplayableNextBus} from "../models/displayable-next-bus.model";
@Component({
  selector: 'next-bus-item',
  templateUrl: 'next-bus-item.component.html',
  styleUrls: ['next-bus-item.component.scss']
})
export class NextBusItemComponent {
  @Input() nextBus: DisplayableNextBus;

}

