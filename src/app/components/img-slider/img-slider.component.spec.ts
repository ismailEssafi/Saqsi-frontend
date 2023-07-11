import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSliderComponent } from './img-slider.component';

describe('ImgSliderComponent', () => {
  let component: ImgSliderComponent;
  let fixture: ComponentFixture<ImgSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgSliderComponent]
    });
    fixture = TestBed.createComponent(ImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
