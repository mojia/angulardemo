"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(err => console.error(err));
//# sourceMappingURL=main.js.map