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
  impressumData: ImpressumData = {
  name: 'FirstName SecondName',
  street: 'Diana Waidmann Strasse 9',
  zip: '8046',
  city: 'Zürich',
  country: 'Schweiz',
  email: 'ingo@gmx.de',
  nonliability: [`Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
            Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.`,
    `Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
           oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch
           technische Störungen entstanden sind, werden ausgeschlossen.`,
    `Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte
           Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung
           zeitweise oder endgültig einzustellen.`],
  nonliabilityLinks: `
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung
                für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen
                Nutzers.
              `,
  copyright: `
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören
                 ausschliesslich dem Inhaber der Website oder den speziell genannten Rechteinhabern. Für die Reproduktion
                jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
               `,
  sourceLink: 'https://www.swissanwalt.ch/impressum-generator.aspx',
  sourceText: 'Impressum-Generator von SwissAnwalt',
};

  constructor(private configService: AppConfigService ) {
  }

  ngOnInit() {
    console.log('Impressum ngOnInit()');
    this.impressumData = this.configService.getImpressum();
  }

}
