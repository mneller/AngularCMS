import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { HomeComponent } from './home.component';
import {AppConfigService} from '../app-config.service';
import {MockAppConfigService} from '../mock-app-config.service';
import {Title} from '@angular/platform-browser';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState, initialAppState} from '../app.reducer';
import {Store} from '@ngrx/store';

describe('HomeComponent', () => {
  let store: MockStore<AppState>;
  const initialState = {
      title: 'toBeSet',
    } as AppState;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        provideMockStore<AppState>({ initialState }),
        // , Title
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
    // store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
