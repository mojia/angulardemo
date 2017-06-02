import {Component, OnInit} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
    selector: "contact-list",
    templateUrl: './list-component.html'
})


export class ContactListComponent implements OnInit {
    contacts: {};

    private isAdd: number = 1;

    constructor(private _contactService: ContactService) {
    }

    ngOnInit() {
        this.getContacts();
    }

    private getContacts() {
        let ss_contacts = sessionStorage.getItem('contacts');

        if (!ss_contacts) {
            this._contactService.getContactsData().subscribe(data => {
                    this.contacts = data;
                    sessionStorage.setItem("contacts", JSON.stringify(data));
                }
            )
        } else {
            this.contacts = JSON.parse(ss_contacts);
        }
    }
}