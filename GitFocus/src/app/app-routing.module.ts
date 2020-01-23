import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { ExceptionfeatureComponent } from './exceptionfeature/exceptionfeature.component';
import { CommitComponent } from './commit/commit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PullrequestComponent } from './pullrequest/pullrequest.component';
import { UnmergepullComponent } from './unmergepull/unmergepull.component';
import { HomeComponent } from './home/home.component';
import { ReportSummaryComponent } from './report-summary/report-summary.component';
import { SummarychartComponent } from './summarychart/summarychart.component';
import { RepositoriesComponent } from './repositories/repositories.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'byweek', component: DashboardComponent },
  {path : 'reports', component : ExceptionfeatureComponent},
  {path : 'bymonth', component : MonthComponent},
  {path : 'byyear', component : YearComponent},
  {path : 'commit', component : CommitComponent},
  {path : 'checkout', component : CheckoutComponent},
  {path : 'pullrequest', component : PullrequestComponent},
  {path : 'unmergepull', component : UnmergepullComponent},
  {path : 'summary', component : ReportSummaryComponent},
  {path : 'chart', component : SummarychartComponent},
  {path : 'repositories', component : RepositoriesComponent}

 
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }