"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_component_1 = require("./list.component");
exports.rootRouterConfig = [
    {
        path: "",
        redirectTo: "app",
        pathMatch: 'full'
    },
    {
        path: "app",
        component: list_component_1.ContactListComponent
    }
];
//# sourceMappingURL=app.router.js.map