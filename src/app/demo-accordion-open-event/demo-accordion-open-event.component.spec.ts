import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccordionOpenEventComponent } from './demo-accordion-open-event.component';

describe('DemoAccordionOpenEventComponent', () => {
  let component: DemoAccordionOpenEventComponent;
  let fixture: ComponentFixture<DemoAccordionOpenEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAccordionOpenEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccordionOpenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
