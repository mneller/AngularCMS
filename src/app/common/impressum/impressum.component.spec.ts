import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponent } from './impressum.component';
import {AppConfigService} from '../../app-config.service';
import {MockAppConfigService} from '../../mock-app-config.service';

describe('ImpressumComponent', () => {
  let component: ImpressumComponent;
  let fixture: ComponentFixture<ImpressumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressumComponent ],
      providers: [{provide: AppConfigService, useClass: MockAppConfigService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
