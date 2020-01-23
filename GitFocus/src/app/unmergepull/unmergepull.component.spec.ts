import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmergepullComponent } from './unmergepull.component';

describe('UnmergepullComponent', () => {
  let component: UnmergepullComponent;
  let fixture: ComponentFixture<UnmergepullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmergepullComponent ]
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
