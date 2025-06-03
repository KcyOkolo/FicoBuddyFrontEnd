import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInfoSection } from './credit-info-section';

describe('CreditInfoSection', () => {
  let component: CreditInfoSection;
  let fixture: ComponentFixture<CreditInfoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditInfoSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditInfoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
