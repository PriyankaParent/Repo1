import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-unmergepull',
  templateUrl: './unmergepull.component.html',
  styleUrls: ['./unmergepull.component.css']
})
export class UnmergepullComponent implements OnInit {
  response:any;
time:string='lastweek';
type:string;
isFlag:boolean=false;
isStatusFlag:boolean=false;
    constructor(private api :ApiService ,private http:HttpClient) { }
  
    ngOnInit() {
      this.getUnmergedPullReq();
    // this.api.setTimeframe(this.api.time);
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
