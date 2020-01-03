import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    getCommitbyWeek() {
        return this.http.get('./assets/Commitbyweek.json');
    }
    getCheckoutbyWeek() {
        return this.http.get('./assets/CheckoutbyWeek.json');
    }
    getPullbyWeek() {
        return this.http.get('./assets/PullrequestbyWeek.json');
    }
    getCommitbyMonth() {
        return this.http.get('./assets/CommitbyMonth.json');
    }
    getCheckoutbyMonth() {
        return this.http.get('./assets/CheckoutByMonth.json');
    }
    getPullbyMonth() {
        return this.http.get('./assets/PullrequestbyMonth.json');
    }
    getCommitbyYear() {
        return this.http.get('./assets/CommitbyYear.json');
    }
    getCheckoutbyYear() {
        return this.http.get('./assets/CheckoutbyYear.json');
    }
    getPullbyYear() {
        return this.http.get('./assets/PullrequestbyYear.json');
    }
    getCategorydata() {
        return this.http.get('./assets/categories.json');
    }
    getdatasetdata() {
        return this.http.get('./assets/data.json');
    }
    getCommitforWeekDetails() {
        this.http.get('http://localhost:8080/gitprime/getcommitcountforWeek/' + this.fromDate + '/' + this.toDate).subscribe((out) => {
            this.type = 'Commit';
            this.isFlag = true;
            this.isStatusFlag = false;
            this.response = out;
            console.log(this.response);
        });
    }
    setfromDate(fromDate) {
        this.fromDate = fromDate;
    }
    settoDate(toDate) {
        this.toDate = toDate;
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map