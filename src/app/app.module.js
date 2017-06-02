var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ContactListComponent } from "./list.component";
import { ContactService } from "./contact.service";
import { APP_BASE_HREF } from '@angular/common';
let ContactDemoModule = class ContactDemoModule {
};
ContactDemoModule = __decorate([
    NgModule({
        declarations: [
            ContactListComponent
        ],
        imports: [
            BrowserModule,
            HttpModule
        ],
        providers: [
            ContactService,
            { provide: APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [ContactListComponent]
    })
], ContactDemoModule);
export { ContactDemoModule };
//# sourceMappingURL=app.module.js.map