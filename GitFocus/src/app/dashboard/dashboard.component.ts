import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';
import { sampledata } from '../bchart';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  response:any;
  time:string='lastweek';
  type:string;
  isFlag:boolean=false;
  isStatusFlag:boolean=false;
  fromDate : any;
  toDate : any;
  commitbyWeek_data: any;
  sample : any;
  day :String;
  constructor(private http : HttpClient,
    private api : ApiService) { }
    
  ngOnInit() {}
    
  getCommitforWeekDetails(){
    this.http.get('http://localhost:8080/gitprime/getcommitcountforWeek/'+ this.fromDate + '/' + this.toDate).subscribe((res)=>{
    this.type='Commit';
    this.isFlag=true;
    this.isStatusFlag=false;
    this.response=res;
    console.log(this.response);
    
    
          let sample = this.response;
          //console.log(this.sample.day);
         /* for (var index in sample) {
            console.log(index); // prints indexes: 0, 1, 2, 3
          
            console.log(sample[index]); // prints elements: 10, 20, 30, 40
          }*/
          

           let names = []
           sample.forEach(data =>{
                names.push(data.user)
                console.log(names);
                            });
            
           let dates1 = []
           sample.forEach(data =>{
              dates1.push(data.date)
              console.log(dates1)
             });

             let commits1 =[]
             sample.forEach(data =>{
                commits1.push(data.commit)
                console.log(commits1);
                });
  /*
             let dates2 = []
           sample.forEach(data =>{
              dates2.push(data.weeksDto[1].timeStamp)
             });
             let dates3 = []
           sample.forEach(data =>{
              dates3.push(data.weeksDto[2].timeStamp)
             });
             let dates4 = []
           sample.forEach(data =>{
              dates4.push(data.weeksDto[3].timeStamp)
             });
             let dates5 = []
           sample.forEach(data =>{
              dates5.push(data.weeksDto[4].timeStamp)
             });
             let dates6 = []
           sample.forEach(data =>{
              dates6.push(data.weeksDto[5].timeStamp)
             });
             let dates7 = []
           sample.forEach(data =>{
              dates7.push(data.weeksDto[6].timeStamp)
             });
  
           
             let commits1 =[]
           sample.forEach(data =>{
              commits1.push(data.weeksDto[0].commit)
              });
            
             let commits2 =[]
            sample.forEach(data =>{
              commits2.push(data.weeksDto[1].commit)
               });
             
              let commits3 =[]
            sample.forEach(data =>{
              commits3.push(data.weeksDto[2].commit)
               });
             
              let commits4 =[]
            sample.forEach(data =>{
              commits4.push(data.weeksDto[3].commit)
               });
               let commits5 =[]
            sample.forEach(data =>{
              commits5.push(data.weeksDto[4].commit)
               });
               let commits6 =[]
            sample.forEach(data =>{
              commits6.push(data.weeksDto[5].commit)
               });
               let commits7 =[]
            sample.forEach(data =>{
              commits7.push(data.weeksDto[6].commit)
               });
               */
  this.commitbyWeek_data = {
      labels: dates1,
      datasets: [
          {
              label: names[0],
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [commits1[0]]
          }
          ]
        }
  
      });
    }
      setfromDate(fromDate:any){
        this.fromDate= fromDate;
          }
  
      settoDate(toDate:Date){
        this.toDate=toDate;
        }
    

  }
    
