import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  response:any;
time:string='lastweek';
type:string;
isFlag:boolean=false;
isStatusFlag:boolean=false;

  fromDate : any;
  toDate : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getCommitDetails()
    }
    getCommitDetails(){
      this.http.get('http://localhost:8080/gitprime/getallusers/'+this.time+'/commit').subscribe((out)=>{
      this.type='Commit';
      this.isFlag=true;
      this.isStatusFlag=false;
      this.response=out;
      console.log(this.response);
    
      });
    }
      setTimeframe(selectedTime:string){
        this.time=selectedTime;
          }
  
          getCommitforWeekDetails(){
            this.http.get('http://localhost:8080/gitprime/getcommitcountforWeek/'+this.fromDate+'/' + this.toDate).subscribe((out)=>{
            this.type='Commit';
            this.isFlag=true;
            this.isStatusFlag=false;
            this.response=out;
            console.log(this.response);
        
            });
          }
            setfromDate(fromDate:any){
              this.fromDate= fromDate;
                }
        
            settoDate(toDate:Date){
              this.toDate=toDate;
              }
        }

