import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reports', component: ExceptionfeatureComponent },
    { path: 'bymonth', component: MonthComponent },
    { path: 'byyear', component: YearComponent },
    { path: 'commit', component: CommitComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'pullrequest', component: PullrequestComponent },
    { path: 'unmergepull', component: UnmergepullComponent },
    { path: 'summary', component: ReportSummaryComponent },
    { path: 'chart', component: SummarychartComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map