import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NextBusesModule} from "./next-buses/next-buses.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NextBusesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
