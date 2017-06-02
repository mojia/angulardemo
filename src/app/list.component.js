"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const contact_service_1 = require("./contact.service");
let ContactListComponent = class ContactListComponent {
    constructor(_contactService) {
        this._contactService = _contactService;
        this.isAdd = 1;
    }
    ngOnInit() {
        this.getContacts();
    }
    getContacts() {
        let ss_contacts = sessionStorage.getItem('contacts');
        if (!ss_contacts) {
            this._contactService.getContactsData().subscribe(data => {
                this.contacts = data;
                sessionStorage.setItem("contacts", JSON.stringify(data));
            });
        }
        else {
            this.contacts = JSON.parse(ss_contacts);
        }
    }
};
ContactListComponent = __decorate([
    core_1.Component({
        selector: "contact-list",
        template: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Bootstrap 实例 - 条纹表格</title>
            <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
            <script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </head>
        <body>

        <table class="table table-striped">
            <caption>Contact List</caption>
            <thead>
            <tr>
                <th>name</th>
                <th>phone</th>
            </tr>
            </thead>

            <tbody *ngFor="let contact of contacts">
            <tr>
                <td>
                    {{contact.name}}
                </td>

                <td>
                    {{contact.telNum}}
                </td>
            </tr>
            </tbody>
        </table>

        </body>
        </html>
    `
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=list.component.js.map