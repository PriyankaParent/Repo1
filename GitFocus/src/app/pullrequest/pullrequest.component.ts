import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pullrequest',
  templateUrl: './pullrequest.component.html',
  styleUrls: ['./pullrequest.component.css']
})
export class PullrequestComponent implements OnInit {
  response:any;
  time:string='lastweek';
  type:string;
  isFlag:boolean=false;
  isStatusFlag:boolean=false;
    constructor(private http:HttpClient) { }
  ngOnInit() {
    this.getPullDetails();

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
  setTimeframe(selectedTime:string){
    this.time=selectedTime;
      }
}