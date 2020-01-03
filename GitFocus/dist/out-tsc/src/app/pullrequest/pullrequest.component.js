import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PullrequestComponent = class PullrequestComponent {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
        this.getPullDetails();
    }
    getPullDetails() {
        this.http.get('http://localhost:8080/gitprime/getallusers/' + this.time + '/pull').subscribe((pull) => {
            this.type = 'Pull';
            this.isFlag = true;
            this.isStatusFlag = false;
            this.response = pull;
            console.log(this.response);
        });
    }
    setTimeframe(selectedTime) {
        this.time = selectedTime;
    }
};
PullrequestComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pullrequest',
        templateUrl: './pullrequest.component.html',
        styleUrls: ['./pullrequest.component.css']
    })
], PullrequestComponent);
export { PullrequestComponent };
//# sourceMappingURL=pullrequest.component.js.map