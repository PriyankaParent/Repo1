import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ReportsComponent = class ReportsComponent {
    constructor(api) {
        this.api = api;
        this.options = {
            responsive: false,
            maintainAspectRatio: false
        };
        this.radar_data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.doughnut_data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.polararea_data = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
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
            let dates8 = [];
            sample.forEach(data => {
                dates8.push(data.weeksDto[7].timeStamp);
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
            let commits8 = [];
            sample.forEach(data => {
                commits8.push(data.weeksDto[7].commit);
            });
            this.bar_data = {
                labels: [dates1[0], dates2[0], dates3[0], dates4[0], dates5[0], dates6[0], dates7[0], dates8[0]],
                datasets: [
                    {
                        label: names[0],
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: [commits1[0], commits2[0], commits3[0], commits4[0], commits5[0], commits6[0], commits7[0], commits8[0]]
                    },
                    {
                        label: names[1],
                        backgroundColor: '#9CCC65',
                        borderColor: '#7CB342',
                        data: [commits1[1], commits2[1], commits3[1], commits4[1], commits5[1], commits6[1], commits7[1], commits8[1]]
                    },
                    {
                        label: names[2],
                        backgroundColor: '#FF0000',
                        borderColor: '#1E88E5',
                        data: [commits1[2], commits2[2], commits3[2], commits4[2], commits5[2], commits6[2], commits7[2], commits8[2]]
                    },
                    {
                        label: names[3],
                        backgroundColor: '#808000',
                        borderColor: '#800000',
                        data: [commits1[3], commits2[3], commits3[3], commits4[3], commits5[3], commits6[3], commits7[3], commits8[3]]
                    }
                ]
            };
            this.line_data = {
                labels: [dates1[0], dates2[0], dates3[0], dates4[0], dates5[0], dates6[0], dates7[0], dates8[0]],
                datasets: [
                    {
                        label: names[0],
                        data: [commits1[0], commits2[0], commits3[0], commits4[0], commits5[0], commits6[0], commits7[0], commits8[0]],
                        fill: false,
                        borderColor: '#4bc0c0'
                    },
                    {
                        label: names[1],
                        data: [commits1[1], commits2[1], commits3[1], commits4[1], commits5[1], commits6[1], commits7[1], commits8[1]],
                        fill: false,
                        borderColor: '#565656'
                    },
                    {
                        label: names[2],
                        fill: false,
                        borderColor: '#1E88E5',
                        data: [commits1[2], commits2[2], commits3[2], commits4[2], commits5[2], commits6[2], commits7[2], commits8[2]]
                    },
                    {
                        label: names[3],
                        fill: false,
                        borderColor: '#800000',
                        data: [commits1[3], commits2[3], commits3[3], commits4[3], commits5[3], commits6[3], commits7[3], commits8[3]]
                    }
                ]
            };
        });
    }
};
ReportsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-reports',
        templateUrl: './reports.component.html',
        styleUrls: ['./reports.component.css']
    })
], ReportsComponent);
export { ReportsComponent };
`  `;
//# sourceMappingURL=reports.component.js.map