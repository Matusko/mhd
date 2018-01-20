/**
 * Created by matus on 20.1.2018.
 */
import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
}


@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
