import {Routes} from "@angular/router";
import {ContactListComponent} from "./list.component";

export const rootRouterConfig: Routes = [
    {
        path: "",
        redirectTo: "app",
        pathMatch: 'full'
    },
    {
        path: "app",
        component: ContactListComponent
    }
];