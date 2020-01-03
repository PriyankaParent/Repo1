import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CommitComponent = class CommitComponent {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
        this.getCommitDetails();
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
    setTimeframe(selectedTime) {
        this.time = selectedTime;
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
CommitComponent = tslib_1.__decorate([
    Component({
        selector: 'app-commit',
        templateUrl: './commit.component.html',
        styleUrls: ['./commit.component.css']
    })
], CommitComponent);
export { CommitComponent };
//# sourceMappingURL=commit.component.js.map