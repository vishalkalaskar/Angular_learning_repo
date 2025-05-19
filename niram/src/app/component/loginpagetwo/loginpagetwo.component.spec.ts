import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpagetwoComponent } from './loginpagetwo.component';

describe('LoginpagetwoComponent', () => {
  let component: LoginpagetwoComponent;
  let fixture: ComponentFixture<LoginpagetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginpagetwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
