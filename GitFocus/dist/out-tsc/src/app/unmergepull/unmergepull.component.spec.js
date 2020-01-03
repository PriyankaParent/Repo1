import { async, TestBed } from '@angular/core/testing';
import { UnmergepullComponent } from './unmergepull.component';
describe('UnmergepullComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnmergepullComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UnmergepullComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=unmergepull.component.spec.js.map