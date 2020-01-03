import { async, TestBed } from '@angular/core/testing';
import { ReportSummaryComponent } from './report-summary.component';
describe('ReportSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportSummaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ReportSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=report-summary.component.spec.js.map