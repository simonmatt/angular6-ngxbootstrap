import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalBasicComponent } from './demo-modal-basic.component';

describe('DemoModalBasicComponent', () => {
  let component: DemoModalBasicComponent;
  let fixture: ComponentFixture<DemoModalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModalBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
