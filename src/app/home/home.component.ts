import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../app.reducer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  app$: Observable<AppState>;
  // constructor(private appConfigService: AppConfigService, private titleService: Title) {
  constructor(private store: Store<{app: AppState}>) {

  }

  ngOnInit() {
    this.app$ = this.store.pipe(select('app'));
    //console.log(this.app$);
  }

}
