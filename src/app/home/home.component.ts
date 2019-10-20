import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  constructor(private appConfigService: AppConfigService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.title = this.appConfigService.getAppName();
    this.titleService.setTitle(this.title);
  }

}
