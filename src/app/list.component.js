var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ContactService } from "./contact.service";
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
    Component({
        selector: "contact-list",
        templateUrl: './list-component.html'
    }),
    __metadata("design:paramtypes", [ContactService])
], ContactListComponent);
export { ContactListComponent };
//# sourceMappingURL=list.component.js.map