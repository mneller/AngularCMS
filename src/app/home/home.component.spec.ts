import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { HomeComponent } from './home.component';
import {AppConfigService} from '../app-config.service';
import {MockAppConfigService} from '../mock-app-config.service';
import {Title} from '@angular/platform-browser';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState, initialAppState} from '../app.reducer';

describe('HomeComponent', () => {
  let store: MockStore;
  const initialState = {
    app: {
      title: 'toBeSet',
    }
  };
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        provideMockStore({ initialState }),
        // , Title
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
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
