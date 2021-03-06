/**
 * Created by matus on 13.1.2018.
 */

import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NextBus} from "./models/next-bus.model";


@Injectable()
export class NextBusesService {

  constructor(private http: HttpClient) { }

  getNextBuses(stopName: string): Observable<NextBus[]> {

    return this.http.get<NextBus[]>(`https://qff0uxjl60.execute-api.eu-west-1.amazonaws.com/Prod/ScheduleResource?stop=${stopName}`);
  }

}
