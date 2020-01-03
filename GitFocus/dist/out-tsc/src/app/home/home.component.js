import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
const dataUrl = 'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json';
const schema = [
    {
        name: 'Time',
        type: 'date',
        format: '%d-%b-%y'
    },
    {
        name: 'Type',
        type: 'string'
    },
    {
        name: 'Sales Value',
        type: 'number'
    }
];
let HomeComponent = class HomeComponent {
    constructor() {
        this.type = 'timeseries';
        this.width = '95%';
        this.height = '500';
        // This is the dataSource of the chart
        this.dataSource = {
            chart: {
                caption: "Yearly Energy Production Rate",
                subcaption: " Top 5 Developed Countries",
                numbersuffix: " TWh",
                showsum: "1",
                plottooltext: "$label produces <b>$dataValue</b> of energy from $seriesName",
                theme: "fusion",
                drawcrossline: "1"
            },
            categories: [
                {
                    category: [
                        {
                            label: "Canada"
                        },
                        {
                            label: "China"
                        },
                        {
                            label: "Russia"
                        },
                        {
                            label: "Australia"
                        },
                        {
                            label: "United States"
                        },
                        {
                            label: "France"
                        }
                    ]
                }
            ],
            dataset: [
                {
                    seriesname: "Coal",
                    data: [
                        {
                            value: "400"
                        },
                        {
                            value: "830"
                        },
                        {
                            value: "500"
                        },
                        {
                            value: "420"
                        },
                        {
                            value: "790"
                        },
                        {
                            value: "380"
                        }
                    ]
                },
                {
                    seriesname: "Hydro",
                    data: [
                        {
                            value: "350"
                        },
                        {
                            value: "620"
                        },
                        {
                            value: "410"
                        },
                        {
                            value: "370"
                        },
                        {
                            value: "720"
                        },
                        {
                            value: "310"
                        }
                    ]
                },
                {
                    seriesname: "Nuclear",
                    data: [
                        {
                            value: "210"
                        },
                        {
                            value: "400"
                        },
                        {
                            value: "450"
                        },
                        {
                            value: "180"
                        },
                        {
                            value: "570"
                        },
                        {
                            value: "270"
                        }
                    ]
                },
                {
                    seriesname: "Gas",
                    data: [
                        {
                            value: "180"
                        },
                        {
                            value: "330"
                        },
                        {
                            value: "230"
                        },
                        {
                            value: "160"
                        },
                        {
                            value: "440"
                        },
                        {
                            value: "350"
                        }
                    ]
                },
                {
                    seriesname: "Oil",
                    data: [
                        {
                            value: "60"
                        },
                        {
                            value: "200"
                        },
                        {
                            value: "200"
                        },
                        {
                            value: "50"
                        },
                        {
                            value: "230"
                        },
                        {
                            value: "150"
                        }
                    ]
                }
            ]
        };
        this.fetchData();
        // this.updateMyChartData();
    }
    fetchData() {
        let jsonify = res => res.json();
        let dataFetch = fetch(dataUrl).then(jsonify);
        Promise.all([dataFetch]).then(res => {
            let data = res[0];
            let fusionTable = new FusionCharts.DataStore().createDataTable(data, schema); // Instance of DataTable to be passed as data in dataSource
            this.dataSource.data = fusionTable;
        });
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html'
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map