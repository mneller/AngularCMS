import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

// Factory function for this service
export function initializeApp(appConfigService: AppConfigService) {
    return () => appConfigService.loadConfig();
} // of function initializeApp(appConfigService: AppConfigService).

export interface AppConfig {
  AppName: string;
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
          this.settings = { AppName: 'Hugo' };
          resolve(true);
         console.log( this.settings);
      });
    });
  } // of loadConfig().

  getAppName(): string {
    return this.settings.AppName;
  }

} // class AppConfigService
