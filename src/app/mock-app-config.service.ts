import {ImpressumData} from './common/impressum/impressum.component';

export class MockAppConfigService {
  getAppName(): string {
    return 'Mock Test App';
  }

  getImpressum(): ImpressumData {
    return {
      name: 'hugo',
      street: 'street',
      zip: 'zip',
      city: 'city',
      country: 'country',
      email: 'email',
      nonliability: ['hugo1', 'hugo2'],
      nonliabilityLinks: 'notLinks',
      copyright: 'copyright',
      sourceLink: 'source',
      sourceText: 'sourcetext'
    };
  }
} // class MockAppConfigService.
