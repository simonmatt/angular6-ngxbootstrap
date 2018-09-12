import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCarouselCustomContentComponent } from './demo-carousel-custom-content.component';

describe('DemoCarouselCustomContentComponent', () => {
  let component: DemoCarouselCustomContentComponent;
  let fixture: ComponentFixture<DemoCarouselCustomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCarouselCustomContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCarouselCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
