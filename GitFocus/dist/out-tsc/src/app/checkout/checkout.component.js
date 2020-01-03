import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CheckoutComponent = class CheckoutComponent {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
        this.getContributors();
    }
    getContributors() {
        this.http.get('http://localhost:8080/gitprime/getallusers/' + this.time + '/checkout').subscribe((out) => {
            this.type = 'Checkout';
            this.isFlag = true;
            this.isStatusFlag = false;
            this.response = out;
            console.log(this.response);
        });
    }
    setTimeframe(selectedTime) {
        this.time = selectedTime;
    }
};
CheckoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.css']
    })
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map