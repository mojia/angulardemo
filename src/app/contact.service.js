var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
const CONTACT_URL = `contacts.json`;
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    request(url, opts) {
        return this.http.request(url, new RequestOptions(opts)).map(res => {
            let _res = res.json();
            if (opts.id) {
                for (let i = 0; i < _res.length; i++) {
                    if (_res[i].id == opts.id) {
                        _res = _res[i];
                    }
                }
            }
            if (opts.collection) {
                let temp = [];
                for (let i = 0; i < _res.length; i++) {
                    if (_res[i].collection == opts.collection) {
                        temp.push(_res[i]);
                    }
                }
                _res = temp;
            }
            return _res;
        });
    }
    get(url, opts) {
        return this.request(url, Object.assign({
            method: 'get'
        }, opts));
    }
    getContactsData() {
        return this.get(CONTACT_URL);
    }
    addContact(obj = {}) {
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(CONTACT_URL, body, options).map(res => res.json());
    }
};
ContactService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map