import {Component, OnInit} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
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