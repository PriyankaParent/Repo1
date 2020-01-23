import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { sampledata } from '../bchart';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  commitbymonth_data :any;
  checkoutbymonth_data :any;
  pullbymonth_data :any;

  sample: Observable<sampledata[]>;
   

      constructor(private api : ApiService) { }
    
  ngOnInit() {
    this.api.getCommitbyMonth().subscribe(res => {
        let sample = res;
         let names = []
         sample.forEach(data =>{
              names.push(data.name)
            });
          
         let dates1 = []
         sample.forEach(data =>{
            dates1.push(data.monthsDto[0].timeStamp)
           });

           let dates2 = []
         sample.forEach(data =>{
            dates2.push(data.monthsDto[1].timeStamp)
           });
           let dates3 = []
         sample.forEach(data =>{
            dates3.push(data.monthsDto[2].timeStamp)
           });
           let dates4 = []
         sample.forEach(data =>{
            dates4.push(data.monthsDto[3].timeStamp)
           });

         
           let commits1 =[]
         sample.forEach(data =>{
            commits1.push(data.monthsDto[0].commit)
            });
          
           let commits2 =[]
          sample.forEach(data =>{
            commits2.push(data.monthsDto[1].commit)
             });
           
            let commits3 =[]
          sample.forEach(data =>{
            commits3.push(data.monthsDto[2].commit)
             });
           
            let commits4 =[]
          sample.forEach(data =>{
            commits4.push(data.monthsDto[3].commit)
             });

this.commitbymonth_data = {
    labels: [dates1[0],dates2[0],dates3[0],dates4[0]],
    datasets: [
        {
            label: names[0],
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [commits1[0],commits2[0],commits3[0],commits4[0]]
        }
        ]
      }

    });
    this.api.getCheckoutbyMonth().subscribe(res => {
      let sample = res;
       let names = []
       sample.forEach(data =>{
            names.push(data.name)
          });
        
       let dates1 = []
       sample.forEach(data =>{
          dates1.push(data.monthsDto[0].timeStamp)
         });

         let dates2 = []
       sample.forEach(data =>{
          dates2.push(data.monthsDto[1].timeStamp)
         });
         let dates3 = []
       sample.forEach(data =>{
          dates3.push(data.monthsDto[2].timeStamp)
         });
         let dates4 = []
       sample.forEach(data =>{
          dates4.push(data.monthsDto[3].timeStamp)
         });
       
         let checkouts1 =[]
       sample.forEach(data =>{
          checkouts1.push(data.monthsDto[0].checkout)
          });
        
         let checkouts2 =[]
        sample.forEach(data =>{
          checkouts2.push(data.monthsDto[1].checkout)
           });
         
          let checkouts3 =[]
        sample.forEach(data =>{
          checkouts3.push(data.monthsDto[2].checkout)
           });
         
          let checkouts4 =[]
        sample.forEach(data =>{
          checkouts4.push(data.monthsDto[3].checkout)
           });
this.checkoutbymonth_data = {
  labels: [dates1[0],dates2[0],dates3[0],dates4[0]],
  datasets: [
      {
          label: names[0],
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [checkouts1[0],checkouts2[0],checkouts3[0],checkouts4[0]]
      }
      ]
    }

  });

  this.api.getPullbyMonth().subscribe(res => {
    let sample = res;
     let names = []
     sample.forEach(data =>{
          names.push(data.name)
        });
      
     let dates1 = []
     sample.forEach(data =>{
        dates1.push(data.monthsDto[0].timeStamp)
       });

       let dates2 = []
     sample.forEach(data =>{
        dates2.push(data.monthsDto[1].timeStamp)
       });
       let dates3 = []
     sample.forEach(data =>{
        dates3.push(data.monthsDto[2].timeStamp)
       });
       let dates4 = []
     sample.forEach(data =>{
        dates4.push(data.monthsDto[3].timeStamp)
       });
    
         let pullReq1 =[]
       sample.forEach(data =>{
          pullReq1.push(data.monthsDto[0].changed_files)
          });
        
         let pullReq2 =[]
        sample.forEach(data =>{
          pullReq2.push(data.monthsDto[1].changed_files)
           });
         
          let pullReq3 =[]
        sample.forEach(data =>{
          pullReq3.push(data.monthsDto[2].changed_files)
           });
         
          let pullReq4 =[]
        sample.forEach(data =>{
          pullReq4.push(data.monthsDto[3].changed_files)
           });
this.pullbymonth_data = {
  labels: [dates1[0],dates2[0],dates3[0],dates4[0]],
  datasets: [
      {
          label: names[0],
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [pullReq1[0],pullReq2[0],pullReq3[0],pullReq4[0]]
      }
      ]
    }

  });

  
  }


  
  options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };
}


