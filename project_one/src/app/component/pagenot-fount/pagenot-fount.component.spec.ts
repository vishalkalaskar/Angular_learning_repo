import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFountComponent } from './pagenot-fount.component';

describe('PagenotFountComponent', () => {
  let component: PagenotFountComponent;
  let fixture: ComponentFixture<PagenotFountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenotFountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
