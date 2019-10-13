import {Component, OnInit} from '@angular/core';
import {AppConfigService} from './app-config.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ellermeier.net';

  constructor(private appConfigService: AppConfigService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.title = this.appConfigService.getAppName();
    this.titleService.setTitle(this.title);
  }

}
