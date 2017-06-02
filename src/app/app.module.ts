import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {ContactListComponent} from "./list.component";
import {ContactService} from "./contact.service";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
    declarations: [
        ContactListComponent
    ],

    imports: [
        BrowserModule,
        HttpModule
    ],

    providers: [
        ContactService,
        {provide: APP_BASE_HREF, useValue: '/'}
    ],

    bootstrap: [ContactListComponent]
})

export class ContactDemoModule {

}


