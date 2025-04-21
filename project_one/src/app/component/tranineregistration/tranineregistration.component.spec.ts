import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranineregistrationComponent } from './tranineregistration.component';

describe('TranineregistrationComponent', () => {
  let component: TranineregistrationComponent;
  let fixture: ComponentFixture<TranineregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranineregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
