import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { sampledata } from '../bchart';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  commitbyyear_data :any;
  checkoutbyyear_data :any;
  pullbyyear_data :any;

  sample: Observable<sampledata[]>;
   

      constructor(private api : ApiService) { }
    
  ngOnInit() {
    this.api.getCommitbyYear().subscribe(res => {
        let sample = res;
         let names = []
         sample.forEach(data =>{
              names.push(data.name)
            });
          
         let dates1 = []
         sample.forEach(data =>{
            dates1.push(data.yearsDto[0].timeStamp)
           });

           let dates2 = []
         sample.forEach(data =>{
            dates2.push(data.yearsDto[1].timeStamp)
           });
           let dates3 = []
         sample.forEach(data =>{
            dates3.push(data.yearsDto[2].timeStamp)
           });
           let dates4 = []
         sample.forEach(data =>{
            dates4.push(data.yearsDto[3].timeStamp)
           });
           let dates5 = []
         sample.forEach(data =>{
            dates5.push(data.yearsDto[4].timeStamp)
           });
           let dates6 = []
         sample.forEach(data =>{
            dates6.push(data.yearsDto[5].timeStamp)
           });
           let dates7 = []
         sample.forEach(data =>{
            dates7.push(data.yearsDto[6].timeStamp)
           });
           let dates8 = []
         sample.forEach(data =>{
          dates8.push(data.yearsDto[7].timeStamp)
           });
           let dates9 = []
         sample.forEach(data =>{
          dates9.push(data.yearsDto[8].timeStamp)
           });
           let dates10 = []
         sample.forEach(data =>{
          dates10.push(data.yearsDto[9].timeStamp)
           });
           let dates11 = []
         sample.forEach(data =>{
            dates11.push(data.yearsDto[10].timeStamp)
           });
           let dates12 = []
         sample.forEach(data =>{
            dates12.push(data.yearsDto[11].timeStamp)
           });
           
         
           let commits1 =[]
         sample.forEach(data =>{
            commits1.push(data.yearsDto[0].commit)
            });
          
           let commits2 =[]
          sample.forEach(data =>{
            commits2.push(data.yearsDto[1].commit)
             });
           
            let commits3 =[]
          sample.forEach(data =>{
            commits3.push(data.yearsDto[2].commit)
             });
           
            let commits4 =[]
          sample.forEach(data =>{
            commits4.push(data.yearsDto[3].commit)
             });
             let commits5 =[]
          sample.forEach(data =>{
            commits5.push(data.yearsDto[4].commit)
             });
             let commits6 =[]
          sample.forEach(data =>{
            commits6.push(data.yearsDto[5].commit)
             });
             let commits7 =[]
          sample.forEach(data =>{
            commits7.push(data.yearsDto[6].commit)
             });
             let commits8 =[]
          sample.forEach(data =>{
            commits8.push(data.yearsDto[7].commit)
             });
             let commits9 =[]
          sample.forEach(data =>{
            commits9.push(data.yearsDto[8].commit)
             });
             let commits10 =[]
          sample.forEach(data =>{
            commits10.push(data.yearsDto[9].commit)
             });
             let commits11 =[]
          sample.forEach(data =>{
            commits11.push(data.yearsDto[10].commit)
             });
             let commits12 =[]
          sample.forEach(data =>{
            commits12.push(data.yearsDto[11].commit)
             });
this.commitbyyear_data = {
    labels: [dates1[0],dates2[0],dates3[0],dates4[0],dates5[0],dates6[0],
             dates7[0],dates8[0],dates9[0],dates10[0],dates11[0],dates12[0]],
    datasets: [
        {
            label: names[0],
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [commits1[0],commits2[0],commits3[0],commits4[0],commits5[0],commits6[0],
            commits7[0],commits8[0],commits9[0],commits10[0],commits11[0],commits12[0]]
        }
        ]
      }

    });
    this.api.getCheckoutbyYear().subscribe(res => {
      let sample = res;
       let names = []
       sample.forEach(data =>{
            names.push(data.name)
          });
        
       let dates1 = []
       sample.forEach(data =>{
          dates1.push(data.yearsDto[0].timeStamp)
         });

         let dates2 = []
       sample.forEach(data =>{
          dates2.push(data.yearsDto[1].timeStamp)
         });
         let dates3 = []
       sample.forEach(data =>{
          dates3.push(data.yearsDto[2].timeStamp)
         });
         let dates4 = []
       sample.forEach(data =>{
          dates4.push(data.yearsDto[3].timeStamp)
         });
         let dates5 = []
       sample.forEach(data =>{
          dates5.push(data.yearsDto[4].timeStamp)
         });
         let dates6 = []
       sample.forEach(data =>{
          dates6.push(data.yearsDto[5].timeStamp)
         });
         let dates7 = []
       sample.forEach(data =>{
          dates7.push(data.yearsDto[6].timeStamp)
         });
         
         let dates8 = []
         sample.forEach(data =>{
          dates8.push(data.yearsDto[7].timeStamp)
           });
           let dates9 = []
         sample.forEach(data =>{
          dates9.push(data.yearsDto[8].timeStamp)
           });
           let dates10 = []
         sample.forEach(data =>{
          dates10.push(data.yearsDto[9].timeStamp)
           });
           let dates11 = []
         sample.forEach(data =>{
            dates11.push(data.yearsDto[10].timeStamp)
           });
           let dates12 = []
         sample.forEach(data =>{
            dates12.push(data.yearsDto[11].timeStamp)
           });
       
         let checkouts1 =[]
       sample.forEach(data =>{
          checkouts1.push(data.yearsDto[0].checkout)
          });
        
         let checkouts2 =[]
        sample.forEach(data =>{
          checkouts2.push(data.yearsDto[1].checkout)
           });
         
          let checkouts3 =[]
        sample.forEach(data =>{
          checkouts3.push(data.yearsDto[2].checkout)
           });
         
          let checkouts4 =[]
        sample.forEach(data =>{
          checkouts4.push(data.yearsDto[3].checkout)
           });
           let checkouts5 =[]
        sample.forEach(data =>{
          checkouts5.push(data.yearsDto[4].checkout)
           });
           let checkouts6 =[]
        sample.forEach(data =>{
          checkouts6.push(data.yearsDto[5].checkout)
           });
           let checkouts7 =[]
        sample.forEach(data =>{
          checkouts7.push(data.yearsDto[6].checkout)
           });
           let checkouts8 =[]
           sample.forEach(data =>{
             checkouts8.push(data.yearsDto[7].checkout)
              });
              let checkouts9 =[]
           sample.forEach(data =>{
             checkouts9.push(data.yearsDto[8].checkout)
              });
              let checkouts10 =[]
           sample.forEach(data =>{
             checkouts10.push(data.yearsDto[9].checkout)
              });
              let checkouts11 =[]
           sample.forEach(data =>{
             checkouts11.push(data.yearsDto[10].checkout)
              });
              let checkouts12 =[]
           sample.forEach(data =>{
             checkouts12.push(data.yearsDto[11].checkout)
              });
this.checkoutbyyear_data = {
  labels:  [dates1[0],dates2[0],dates3[0],dates4[0],dates5[0],dates6[0],
  dates7[0],dates8[0],dates9[0],dates10[0],dates11[0],dates12[0]],
  datasets: [
      {
          label: names[0],
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data:  [checkouts1[0],checkouts2[0],checkouts3[0],checkouts4[0],checkouts5[0],checkouts6[0],
          checkouts7[0],checkouts8[0],checkouts9[0],checkouts10[0],checkouts11[0],checkouts12[0]]}
      ]
    }

  });

  this.api.getPullbyYear().subscribe(res => {
    let sample = res;
     let names = []
     sample.forEach(data =>{
          names.push(data.name)
        });
      
     let dates1 = []
     sample.forEach(data =>{
        dates1.push(data.yearsDto[0].timeStamp)
       });

       let dates2 = []
     sample.forEach(data =>{
        dates2.push(data.yearsDto[1].timeStamp)
       });
       let dates3 = []
     sample.forEach(data =>{
        dates3.push(data.yearsDto[2].timeStamp)
       });
       let dates4 = []
     sample.forEach(data =>{
        dates4.push(data.yearsDto[3].timeStamp)
       });
       let dates5 = []
       sample.forEach(data =>{
          dates5.push(data.yearsDto[4].timeStamp)
         });
         let dates6 = []
       sample.forEach(data =>{
          dates6.push(data.yearsDto[5].timeStamp)
         });
         let dates7 = []
       sample.forEach(data =>{
          dates7.push(data.yearsDto[6].timeStamp)
         });
          
         let dates8 = []
         sample.forEach(data =>{
          dates8.push(data.yearsDto[7].timeStamp)
           });
           let dates9 = []
         sample.forEach(data =>{
          dates9.push(data.yearsDto[8].timeStamp)
           });
           let dates10 = []
         sample.forEach(data =>{
          dates10.push(data.yearsDto[9].timeStamp)
           });
           let dates11 = []
         sample.forEach(data =>{
            dates11.push(data.yearsDto[10].timeStamp)
           });
           let dates12 = []
         sample.forEach(data =>{
            dates12.push(data.yearsDto[11].timeStamp)
           });
       
    
         let pullReq1 =[]
       sample.forEach(data =>{
          pullReq1.push(data.yearsDto[0].changed_files)
          });
        
         let pullReq2 =[]
        sample.forEach(data =>{
          pullReq2.push(data.yearsDto[1].changed_files)
           });
         
          let pullReq3 =[]
        sample.forEach(data =>{
          pullReq3.push(data.yearsDto[2].changed_files)
           });
         
          let pullReq4 =[]
        sample.forEach(data =>{
          pullReq4.push(data.yearsDto[3].changed_files)
           });
           let pullReq5 =[]
        sample.forEach(data =>{
          pullReq5.push(data.yearsDto[4].changed_files)
           });
           let pullReq6 =[]
        sample.forEach(data =>{
          pullReq6.push(data.yearsDto[5].changed_files)
           });
           let pullReq7 =[]
        sample.forEach(data =>{
          pullReq7.push(data.yearsDto[6].changed_files)
           });
           
           let pullReq8 =[]
           sample.forEach(data =>{
             pullReq8.push(data.yearsDto[7].changed_files)
              });
              let pullReq9 =[]
           sample.forEach(data =>{
             pullReq9.push(data.yearsDto[8].changed_files)
              });
              let pullReq10 =[]
           sample.forEach(data =>{
             pullReq10.push(data.yearsDto[9].changed_files)
              });
              let pullReq11 =[]
           sample.forEach(data =>{
             pullReq11.push(data.yearsDto[10].changed_files)
              });
              let pullReq12 =[]
           sample.forEach(data =>{
             pullReq12.push(data.yearsDto[11].changed_files)
              });
this.pullbyyear_data = {
  labels:  [dates1[0],dates2[0],dates3[0],dates4[0],dates5[0],dates6[0],
           dates7[0],dates8[0],dates9[0],dates10[0],dates11[0],dates12[0]],
  datasets: [
      {
          label: names[0],
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data:  [pullReq1[0],pullReq2[0],pullReq3[0],pullReq4[0],pullReq5[0],pullReq6[0],
          pullReq7[0],pullReq8[0],pullReq9[0],pullReq10[0],pullReq11[0],pullReq12[0]]
      }
      ]
    }

  });

  
  }


  
  options = {
    responsive: false,
    maintainAspectRatio: false
  };
}
