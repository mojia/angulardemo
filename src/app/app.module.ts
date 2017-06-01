import {ContactDetailComponent} from "./detail/detail.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../app.component";


@NgModule({
    declarations: [
        ContactDetailComponent
    ],

    imports: [
        BrowserModule
    ],

    providers: [

    ],

    bootstrap: [AppComponent]
})

export class AppModule{

}


