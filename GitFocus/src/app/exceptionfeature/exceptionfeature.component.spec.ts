import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionfeatureComponent } from './exceptionfeature.component';

describe('ExceptionfeatureComponent', () => {
  let component: ExceptionfeatureComponent;
  let fixture: ComponentFixture<ExceptionfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionfeatureComponent ]
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
