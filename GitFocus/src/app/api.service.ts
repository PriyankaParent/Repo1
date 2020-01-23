import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
response:any;
time:string='lastweek';
type:string;
isFlag:boolean=false;
isStatusFlag:boolean=false;
fromDate: any;
toDate: any;
  constructor(private http:HttpClient ){ }

  getCommitbyWeek(): Observable<any> {
    return this.http.get('./assets/Commitbyweek.json');
  }
  getCheckoutbyWeek(): Observable<any> {
    return this.http.get('./assets/CheckoutbyWeek.json');
  }
  getPullbyWeek(): Observable<any> {
    return this.http.get('./assets/PullrequestbyWeek.json');
  }

  getCommitbyMonth(): Observable<any> {
    return this.http.get('./assets/CommitbyMonth.json');
  }
  getCheckoutbyMonth(): Observable<any> {
    return this.http.get('./assets/CheckoutByMonth.json');
  }
  getPullbyMonth(): Observable<any> {
    return this.http.get('./assets/PullrequestbyMonth.json');
  }
  
  getCommitbyYear(): Observable<any> {
    return this.http.get('./assets/CommitbyYear.json');
  }
  getCheckoutbyYear(): Observable<any> {
    return this.http.get('./assets/CheckoutbyYear.json');
  }
  getPullbyYear(): Observable<any> {
    return this.http.get('./assets/PullrequestbyYear.json');
  }

  getCategorydata(): Observable<any>{
    return this.http.get('./assets/categories.json')
  }

  getdatasetdata(): Observable<any>{
    return this.http.get('./assets/data.json')
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
      /*
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
  }*/
}

