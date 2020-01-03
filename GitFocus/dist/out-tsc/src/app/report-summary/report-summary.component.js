import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ReportSummaryComponent = class ReportSummaryComponent {
    constructor(http) {
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
        //this.getActivitySummary();
    }
    getActivitySummary() {
        this.http.get('http://localhost:8080/gitprime/getDashboardSummary/' + this.time + '/').subscribe((out) => {
            this.response = out;
            console.log(this.response);
        });
    }
    setTimeframe(selectedTime) {
        this.time = selectedTime;
    }
};
ReportSummaryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-report-summary',
        templateUrl: './report-summary.component.html',
        styleUrls: ['./report-summary.component.css']
    })
], ReportSummaryComponent);
export { ReportSummaryComponent };
//# sourceMappingURL=report-summary.component.js.map