import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ExceptionfeatureComponent = class ExceptionfeatureComponent {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
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
    getCommitDetails() {
        this.http.get('http://localhost:8080/gitprime/getallusers/' + this.time + '/commit').subscribe((out) => {
            this.type = 'Commit';
            this.isFlag = true;
            this.isStatusFlag = false;
            this.response = out;
            console.log(this.response);
        });
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
    getUnmergedPullReq() {
        this.http.get('http://localhost:8080/gitprime/getallusers/' + this.time + '/unmerge').subscribe((unmerged) => {
            this.type = 'Unmerged Pull Request';
            this.isFlag = false;
            this.isStatusFlag = true;
            this.response = unmerged;
            console.log(this.response);
        });
    }
    setTimeframe(selectedTime) {
        this.time = selectedTime;
    }
};
ExceptionfeatureComponent = tslib_1.__decorate([
    Component({
        selector: 'app-exceptionfeature',
        templateUrl: './exceptionfeature.component.html',
        styleUrls: ['./exceptionfeature.component.css']
    })
], ExceptionfeatureComponent);
export { ExceptionfeatureComponent };
//# sourceMappingURL=exceptionfeature.component.js.map