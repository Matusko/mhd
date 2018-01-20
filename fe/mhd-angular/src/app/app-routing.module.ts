/**
 * Created by matus on 20.1.2018.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NextBusesComponent} from "./next-buses/next-buses.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: ':stopName',
    component: NextBusesComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
