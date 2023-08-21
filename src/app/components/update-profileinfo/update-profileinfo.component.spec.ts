import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileinfoComponent } from './update-profileinfo.component';

describe('UpdateProfileinfoComponent', () => {
  let component: UpdateProfileinfoComponent;
  let fixture: ComponentFixture<UpdateProfileinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileinfoComponent]
    });
    fixture = TestBed.createComponent(UpdateProfileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
