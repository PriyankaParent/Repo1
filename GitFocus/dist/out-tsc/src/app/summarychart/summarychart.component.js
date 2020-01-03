import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SummarychartComponent = class SummarychartComponent {
    //datachart : any;
    constructor(http, api) {
        this.http = http;
        this.api = api;
        this.datachart = {
            chart: {
                caption: "Yearly Energy Production Rate",
                subcaption: " Top 5 Developed Countries",
                numbersuffix: " TWh",
                showsum: "1",
                //plottooltext:
                // "$label produces <b>$dataValue</b> of energy from $seriesName",
                theme: "fusion",
                drawcrossline: "1"
            },
            categories: [
                {
                    category: [this.categorydata]
                }
            ],
            dataset: [
                {
                    data: [this.chartdata]
                }
            ]
        };
        this.width = 600;
        this.height = 400;
        this.type = "stackedcolumn2d";
        this.dataFormat = "json";
        this.dataSource = this.datachart;
    }
    ngOnInit() {
        this.api.getCategorydata().subscribe(res => {
            this.categorydata = res;
        });
        this.api.getdatasetdata().subscribe(out => {
            this.chartdata = out;
            //console.log(this.chartdata);
            console.log(this.datachart);
        });
    }
};
SummarychartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-summarychart',
        templateUrl: './summarychart.component.html',
        styleUrls: ['./summarychart.component.css']
    })
], SummarychartComponent);
export { SummarychartComponent };
/*
datachart = {
  chart: {
    caption: "Yearly Energy Production Rate",
    subcaption: " Top 5 Developed Countries",
    numbersuffix: " TWh",
    showsum: "1",
    //plottooltext:
    // "$label produces <b>$dataValue</b> of energy from $seriesName",
    theme: "fusion",
    drawcrossline: "1"
  },
  categories: [
    {
      category: this.categorydata
    }
  ],
  dataset: [
    {
      data: this.chartdata
    }
  ]
};
*/
/*
  width = 600;
  height = 400;
  type = "stackedcolumn2d";
  dataFormat = "json";
  dataSource ={
    chart: {
      caption: "Yearly Energy Production Rate",
      subcaption: " Top 5 Developed Countries",
      numbersuffix: " TWh",
      showsum: "1",
      //plottooltext:
      // "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "fusion",
      drawcrossline: "1"
    },
    categories: [
      {
        category: this.categorydata
      }
    ],
    dataset: [
      {
        data: this.chartdata
      }
    ]
  };
 
}
    /*
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
}*/
//# sourceMappingURL=summarychart.component.js.map