import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  response:any;
time:string='lastweek';
type:string;
isFlag:boolean=false;
isStatusFlag:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getContributors();
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

  setTimeframe(selectedTime:string){
    this.time=selectedTime;
      }

}