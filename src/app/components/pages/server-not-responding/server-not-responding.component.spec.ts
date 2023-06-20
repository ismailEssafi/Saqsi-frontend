import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNotRespondingComponent } from './server-not-responding.component';

describe('ServerNotRespondingComponent', () => {
  let component: ServerNotRespondingComponent;
  let fixture: ComponentFixture<ServerNotRespondingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerNotRespondingComponent]
    });
    fixture = TestBed.createComponent(ServerNotRespondingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
