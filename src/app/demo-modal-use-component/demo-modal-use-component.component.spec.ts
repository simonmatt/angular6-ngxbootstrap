import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalUseComponentComponent } from './demo-modal-use-component.component';

describe('DemoModalUseComponentComponent', () => {
  let component: DemoModalUseComponentComponent;
  let fixture: ComponentFixture<DemoModalUseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModalUseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalUseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
