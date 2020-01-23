import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-summary',
  templateUrl: './report-summary.component.html',
  styleUrls: ['./report-summary.component.css']
})
export class ReportSummaryComponent implements OnInit {
  response:any;
  time:string;
  //action:string;
  //isFlag:boolean=false;
  //isStatusFlag:boolean=false;
  //datachart: any;
  categorydata :any;
  chartdata : any ;
  
  constructor(private http: HttpClient) { }
 
  datachart ={
    chart: {
      caption: "Consolidated Data"
    },
    categories: [],
    dataset: []
      
  }

  ngOnInit() { 
  }
  
  getActivitySummary(){
    this.http.get('http://localhost:8090/gitprime/getDashboardSummary/' + this.time + '/').subscribe((out)=>{
    this.response=out;
    console.log(this.response);

    });
  }
  setTimeframe(selectedTime:string){
    this.time=selectedTime;
      }

      getChartdata(name : string){

        this.http.get('http://localhost:8090/gitprime/getUserSummaryDetails/W/51/'+name).subscribe((out)=>{
          this.categorydata=out;
         
         this.datachart ={
          chart: {
            caption: "Consolidated Data"
          },
          categories: [this.categorydata[0]],
          dataset: [this.categorydata[1],this.categorydata[2],this.categorydata[3],this.categorydata[4]]
            
        }
        console.log(this.datachart);
          });
      }

  
    width = 600;
    height = 400;
    type = "stackedcolumn3d";
    dataFormat = "json";
    dataSource = this.datachart;


  
}
