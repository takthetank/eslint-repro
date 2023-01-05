import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
   .bootstrapModule(null as never)
   // eslint-disable-next-line no-console
   .catch((err) => console.error(err));
