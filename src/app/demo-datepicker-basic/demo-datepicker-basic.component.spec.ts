import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatepickerBasicComponent } from './demo-datepicker-basic.component';

describe('DemoDatepickerBasicComponent', () => {
  let component: DemoDatepickerBasicComponent;
  let fixture: ComponentFixture<DemoDatepickerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatepickerBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatepickerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
