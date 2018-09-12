import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatepickerInitialStateComponent } from './demo-datepicker-initial-state.component';

describe('DemoDatepickerInitialStateComponent', () => {
  let component: DemoDatepickerInitialStateComponent;
  let fixture: ComponentFixture<DemoDatepickerInitialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatepickerInitialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatepickerInitialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
