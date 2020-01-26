import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {appRoutes} from './app.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AppConfigService} from './app-config.service';
import {ImpressumData} from './common/impressum/impressum.component';
import {componentFactoryName} from '@angular/compiler';
import {Title} from '@angular/platform-browser';
import {MockAppConfigService} from './mock-app-config.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: AppConfigService, useClass: MockAppConfigService}, Title],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularCMS'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ellermeier.net');
  });
});
