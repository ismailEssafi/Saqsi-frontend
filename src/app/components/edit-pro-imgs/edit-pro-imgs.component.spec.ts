import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProImgsComponent } from './edit-pro-imgs.component';

describe('EditProImgsComponent', () => {
  let component: EditProImgsComponent;
  let fixture: ComponentFixture<EditProImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProImgsComponent]
    });
    fixture = TestBed.createComponent(EditProImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
