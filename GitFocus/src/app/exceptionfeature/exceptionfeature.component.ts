import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exceptionfeature',
  templateUrl: './exceptionfeature.component.html',
  styleUrls: ['./exceptionfeature.component.css']
})
export class ExceptionfeatureComponent implements OnInit {
response:any;
time:string='lastweek';
type:string;
isFlag:boolean=false;
isStatusFlag:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  getContributors(){
    this.http.get('http://localhost:8080/gitprime/getallusers/'+this.time+'/checkout').subscribe((out)=>{
    this.type='Checkout';
    this.isFlag=true;
    this.isStatusFlag=false;
    this.response=out;
    console.log(this.response);

    });
    
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
  getPullDetails(){
    this.http.get('http://localhost:8080/gitprime/getallusers/'+this.time+'/pull').subscribe((pull)=>{
      this.type='Pull';
      this.isFlag=true;
      this.isStatusFlag=false;
      this.response=pull;
      console.log(this.response);
  
      });

  }
  getUnmergedPullReq(){
    this.http.get('http://localhost:8080/gitprime/getallusers/'+this.time+'/unmerge').subscribe((unmerged)=>{
      this.type='Unmerged Pull Request';
      this.isFlag=false;
      this.isStatusFlag=true;
      this.response=unmerged;
      console.log(this.response);
  
      });
  }
  setTimeframe(selectedTime:string){
this.time=selectedTime;
  }
}
