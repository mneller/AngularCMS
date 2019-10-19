import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../../app-config.service';

export interface ImpressumData {
  name: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  email: string;
  nonliability: string[];
  nonliabilityLinks: string;
  copyright: string;
  sourceLink: string;
  sourceText: string;
} // of interface ImpressumData

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit {
  impressumData: ImpressumData = null;
  constructor(private configService: AppConfigService ) {
  }

  ngOnInit() {
    this.impressumData = this.configService.getImpressum();
  }

}
