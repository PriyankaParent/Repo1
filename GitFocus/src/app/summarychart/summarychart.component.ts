import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-summarychart',
  templateUrl: './summarychart.component.html',
  styleUrls: ['./summarychart.component.css']
})

export class SummarychartComponent implements OnInit {
 

  datachart : any;

  constructor(private http: HttpClient,private api:ApiService){}
  response: any;
  categorydata :any;
  chartdata : any ;

  ngOnInit() {
    this.getCategorydata();
  }
   
  getCategorydata(){
      this.http.get('http://localhost:8080/gitprime/getUserSummaryDetails/W/54').subscribe((out)=>{
      this.categorydata=out;
     
     this.datachart ={
      chart: {
        caption: "Consolidated Data",
        showsum: "1",
        theme: "fusion",
        drawcrossline: "1"
      },
      categories: [this.categorydata[0]],
      dataset: [this.categorydata[1],this.categorydata[2],this.categorydata[3],this.categorydata[4]]
        
    }
    console.log(this.datachart);
      });
    }

  width = 600;
  height = 400;
  type = "stackedcolumn2d";
  dataFormat = "json";
  dataSource = this.datachart;
  
}
