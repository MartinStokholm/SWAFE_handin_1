import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/Modules/AppModule/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
