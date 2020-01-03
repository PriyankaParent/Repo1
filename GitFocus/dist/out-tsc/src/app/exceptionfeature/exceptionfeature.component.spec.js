import { async, TestBed } from '@angular/core/testing';
import { ExceptionfeatureComponent } from './exceptionfeature.component';
describe('ExceptionfeatureComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExceptionfeatureComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExceptionfeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=exceptionfeature.component.spec.js.map