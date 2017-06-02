import 'reflect-metadata';
import 'zone.js';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ContactDemoModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(ContactDemoModule).catch(err => console.error(err));