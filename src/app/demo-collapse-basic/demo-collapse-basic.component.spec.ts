import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCollapseBasicComponent } from './demo-collapse-basic.component';

describe('DemoCollapseBasicComponent', () => {
  let component: DemoCollapseBasicComponent;
  let fixture: ComponentFixture<DemoCollapseBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCollapseBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCollapseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
