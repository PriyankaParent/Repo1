import { async, TestBed } from '@angular/core/testing';
import { LeftnavmenuComponent } from './leftnavmenu.component';
describe('LeftnavmenuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeftnavmenuComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LeftnavmenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leftnavmenu.component.spec.js.map