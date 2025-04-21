import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuseComponent } from './contactuse.component';

describe('ContactuseComponent', () => {
  let component: ContactuseComponent;
  let fixture: ComponentFixture<ContactuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
