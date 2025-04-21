import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcourcesComponent } from './allcources.component';

describe('AllcourcesComponent', () => {
  let component: AllcourcesComponent;
  let fixture: ComponentFixture<AllcourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
