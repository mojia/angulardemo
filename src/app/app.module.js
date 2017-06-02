"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const list_component_1 = require("./list.component");
const contact_service_1 = require("./contact.service");
const router_1 = require("@angular/router");
const app_router_1 = require("./app.router");
const common_1 = require("@angular/common");
let ContactDemoModule = class ContactDemoModule {
};
ContactDemoModule = __decorate([
    core_1.NgModule({
        declarations: [
            list_component_1.ContactListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_router_1.rootRouterConfig)
        ],
        providers: [
            contact_service_1.ContactService,
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [list_component_1.ContactListComponent]
    })
], ContactDemoModule);
exports.ContactDemoModule = ContactDemoModule;
//# sourceMappingURL=app.module.js.map