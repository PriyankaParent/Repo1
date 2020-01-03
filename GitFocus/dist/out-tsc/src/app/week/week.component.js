import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let WeekComponent = class WeekComponent {
    constructor(api) {
        this.api = api;
        this.options = {
            responsive: false,
            maintainAspectRatio: false
        };
    }
    ngOnInit() {
        this.api.getCommitbyWeek().subscribe(res => {
            let sample = res;
            let names = [];
            sample.forEach(data => {
                names.push(data.name);
            });
            let dates1 = [];
            sample.forEach(data => {
                dates1.push(data.weeksDto[0].timeStamp);
            });
            let dates2 = [];
            sample.forEach(data => {
                dates2.push(data.weeksDto[1].timeStamp);
            });
            let dates3 = [];
            sample.forEach(data => {
                dates3.push(data.weeksDto[2].timeStamp);
            });
            let dates4 = [];
            sample.forEach(data => {
                dates4.push(data.weeksDto[3].timeStamp);
            });
            let dates5 = [];
            sample.forEach(data => {
                dates5.push(data.weeksDto[4].timeStamp);
            });
            let dates6 = [];
            sample.forEach(data => {
                dates6.push(data.weeksDto[5].timeStamp);
            });
            let dates7 = [];
            sample.forEach(data => {
                dates7.push(data.weeksDto[6].timeStamp);
            });
            let commits1 = [];
            sample.forEach(data => {
                commits1.push(data.weeksDto[0].commit);
            });
            let commits2 = [];
            sample.forEach(data => {
                commits2.push(data.weeksDto[1].commit);
            });
            let commits3 = [];
            sample.forEach(data => {
                commits3.push(data.weeksDto[2].commit);
            });
            let commits4 = [];
            sample.forEach(data => {
                commits4.push(data.weeksDto[3].commit);
            });
            let commits5 = [];
            sample.forEach(data => {
                commits5.push(data.weeksDto[4].commit);
            });
            let commits6 = [];
            sample.forEach(data => {
                commits6.push(data.weeksDto[5].commit);
            });
            let commits7 = [];
            sample.forEach(data => {
                commits7.push(data.weeksDto[6].commit);
            });
            this.commitbyWeek_data = {
                labels: [dates1[0], dates2[0], dates3[0], dates4[0], dates5[0], dates6[0], dates7[0]],
                datasets: [
                    {
                        label: names[0],
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: [commits1[0], commits2[0], commits3[0], commits4[0], commits5[0], commits6[0], commits7[0]]
                    }
                ]
            };
        });
        this.api.getCheckoutbyWeek().subscribe(res => {
            let sample = res;
            let names = [];
            sample.forEach(data => {
                names.push(data.name);
            });
            let dates1 = [];
            sample.forEach(data => {
                dates1.push(data.weeksDto[0].timeStamp);
            });
            let dates2 = [];
            sample.forEach(data => {
                dates2.push(data.weeksDto[1].timeStamp);
            });
            let dates3 = [];
            sample.forEach(data => {
                dates3.push(data.weeksDto[2].timeStamp);
            });
            let dates4 = [];
            sample.forEach(data => {
                dates4.push(data.weeksDto[3].timeStamp);
            });
            let dates5 = [];
            sample.forEach(data => {
                dates5.push(data.weeksDto[4].timeStamp);
            });
            let dates6 = [];
            sample.forEach(data => {
                dates6.push(data.weeksDto[5].timeStamp);
            });
            let dates7 = [];
            sample.forEach(data => {
                dates7.push(data.weeksDto[6].timeStamp);
            });
            let checkouts1 = [];
            sample.forEach(data => {
                checkouts1.push(data.weeksDto[0].checkout);
            });
            let checkouts2 = [];
            sample.forEach(data => {
                checkouts2.push(data.weeksDto[1].checkout);
            });
            let checkouts3 = [];
            sample.forEach(data => {
                checkouts3.push(data.weeksDto[2].checkout);
            });
            let checkouts4 = [];
            sample.forEach(data => {
                checkouts4.push(data.weeksDto[3].checkout);
            });
            let checkouts5 = [];
            sample.forEach(data => {
                checkouts5.push(data.weeksDto[4].checkout);
            });
            let checkouts6 = [];
            sample.forEach(data => {
                checkouts6.push(data.weeksDto[5].checkout);
            });
            let checkouts7 = [];
            sample.forEach(data => {
                checkouts7.push(data.weeksDto[6].checkout);
            });
            this.checkoutbyweek_data = {
                labels: [dates1[0], dates2[0], dates3[0], dates4[0], dates5[0], dates6[0], dates7[0]],
                datasets: [
                    {
                        label: names[0],
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: [checkouts1[0], checkouts2[0], checkouts3[0], checkouts4[0], checkouts5[0], checkouts6[0], checkouts7[0]]
                    }
                ]
            };
        });
        this.api.getPullbyWeek().subscribe(res => {
            let sample = res;
            let names = [];
            sample.forEach(data => {
                names.push(data.name);
            });
            let dates1 = [];
            sample.forEach(data => {
                dates1.push(data.weeksDto[0].timeStamp);
            });
            let dates2 = [];
            sample.forEach(data => {
                dates2.push(data.weeksDto[1].timeStamp);
            });
            let dates3 = [];
            sample.forEach(data => {
                dates3.push(data.weeksDto[2].timeStamp);
            });
            let dates4 = [];
            sample.forEach(data => {
                dates4.push(data.weeksDto[3].timeStamp);
            });
            let dates5 = [];
            sample.forEach(data => {
                dates5.push(data.weeksDto[4].timeStamp);
            });
            let dates6 = [];
            sample.forEach(data => {
                dates6.push(data.weeksDto[5].timeStamp);
            });
            let dates7 = [];
            sample.forEach(data => {
                dates7.push(data.weeksDto[6].timeStamp);
            });
            let pullReq1 = [];
            sample.forEach(data => {
                pullReq1.push(data.weeksDto[0].changed_files);
            });
            let pullReq2 = [];
            sample.forEach(data => {
                pullReq2.push(data.weeksDto[1].changed_files);
            });
            let pullReq3 = [];
            sample.forEach(data => {
                pullReq3.push(data.weeksDto[2].changed_files);
            });
            let pullReq4 = [];
            sample.forEach(data => {
                pullReq4.push(data.weeksDto[3].changed_files);
            });
            let pullReq5 = [];
            sample.forEach(data => {
                pullReq5.push(data.weeksDto[4].changed_files);
            });
            let pullReq6 = [];
            sample.forEach(data => {
                pullReq6.push(data.weeksDto[5].changed_files);
            });
            let pullReq7 = [];
            sample.forEach(data => {
                pullReq7.push(data.weeksDto[6].changed_files);
            });
            this.pullbyweek_data = {
                labels: [dates1[0], dates2[0], dates3[0], dates4[0], dates5[0], dates6[0], dates7[0]
                ],
                datasets: [
                    {
                        label: names[0],
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: [pullReq1[0], pullReq2[0], pullReq3[0], pullReq4[0], pullReq5[0], pullReq6[0], pullReq7[0]]
                    }
                ]
            };
        });
    }
};
WeekComponent = tslib_1.__decorate([
    Component({
        selector: 'app-week',
        templateUrl: './week.component.html',
        styleUrls: ['./week.component.css']
    })
], WeekComponent);
export { WeekComponent };
//# sourceMappingURL=week.component.js.map