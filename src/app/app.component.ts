import {Component, OnInit} from '@angular/core';
import {AppConfigService} from './app-config.service';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {AppState} from './app.reducer';
import {setAppTitle} from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ellermeier.net';

  constructor(private store: Store<AppState>,  private appConfigService: AppConfigService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.title = this.appConfigService.getAppName();
    console.log('Title:' + this.title);
    this.titleService.setTitle(this.title);
  }

}
