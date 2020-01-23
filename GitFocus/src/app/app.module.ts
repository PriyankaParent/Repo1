import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as FusionCharts from 'fusioncharts';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavmenuComponent } from './leftnavmenu/leftnavmenu.component';
import { FooterComponent } from './footer/footer.component';
import {ReportsComponent} from './reports/reports.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { ExceptionfeatureComponent } from './exceptionfeature/exceptionfeature.component';
import { CommitComponent } from './commit/commit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PullrequestComponent } from './pullrequest/pullrequest.component';
import { UnmergepullComponent } from './unmergepull/unmergepull.component';
import { HomeComponent } from './home/home.component';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import { ReportSummaryComponent } from './report-summary/report-summary.component';
import { SummarychartComponent } from './summarychart/summarychart.component'; 
import { ApiService } from './api.service';
import { RepositoriesComponent } from './repositories/repositories.component';
FusionChartsModule.fcRoot(FusionCharts, TimeSeries);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftnavmenuComponent,
    FooterComponent,
    DashboardComponent,
    ReportsComponent,
    WeekComponent,
    MonthComponent,
    YearComponent,
    ExceptionfeatureComponent,
    CommitComponent,
    CheckoutComponent,
    PullrequestComponent,
    UnmergepullComponent,
    HomeComponent,
    ReportSummaryComponent,
    SummarychartComponent,
    RepositoriesComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    ToastModule,
    NgbModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    FusionChartsModule
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
