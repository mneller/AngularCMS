import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ImpressumData} from './common/impressum/impressum.component';

// Factory function for this service
export function initializeApp(appConfigService: AppConfigService) {
    return () => appConfigService.loadConfig();
} // of function initializeApp(appConfigService: AppConfigService).

export interface AppConfig {
  appName: string;
  impressum: ImpressumData;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  settings: AppConfig = null;

  constructor(private http: HttpClient) { }
  // constructor() { }

  // loadConfig(): Promise<boolean> {
  loadConfig (): Promise<boolean> {
    const jsonFile = `./assets/config.json`;

    return new Promise<boolean>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: AppConfig) => {
        this.settings = <AppConfig>response;
        console.log( this.settings);
        resolve();   // Return Success
      }).catch((response: HttpErrorResponse) => {
          console.log(response);
          if (response.status !== 404) {
            resolve(false);
          }
          const  impressumData: ImpressumData = {
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
        this.settings = { appName: 'Hugo',  impressum: impressumData};
        resolve(true);
         console.log( this.settings);
      });
    });
  } // of loadConfig().

  getAppName(): string {
    console.log("getAppName() called");
    return this.settings.appName;
  }

  getImpressum(): ImpressumData {
    console.log('Hugo was here');
    return this.settings.impressum;
  }

} // class AppConfigService
