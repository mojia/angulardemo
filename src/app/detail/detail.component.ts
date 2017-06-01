import {Component} from "@angular/core";

@Component({
    selector: "contact-detail",
    template: `
        <div>
            <p>{{name}}</p>
            <p>{{phone}}</p>
        </div>
    `
})

export class ContactDetailComponent {
    name: string = 'prince'
    phone: string = '18612478601'
}