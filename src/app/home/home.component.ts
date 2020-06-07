import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../app.reducer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title$: Observable<string>;
  // constructor(private appConfigService: AppConfigService, private titleService: Title) {
  constructor(private store: Store<{app: AppState}>) {
    this.title$ = store.pipe(select('app', 'title'));
    console.log(this.title$);
  }
}
