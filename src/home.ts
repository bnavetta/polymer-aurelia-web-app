/// <reference path="aurelia-framework/aurelia-framework.d.ts"/>
import { computedFrom } from 'aurelia-framework';

export class Home {
    heading = 'Welcome to this Aurelia web application!';
    firstName = 'John';
    lastName = 'Navetta';

    constructor() {
        this.firstName = 'Ben';
    }

    @computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
